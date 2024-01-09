import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CodeEditor from '../CodeEditor';
import { SocketContext } from '../../Context';

const Compiler = () => {
	const { editorTheme, setEditorTheme, editorFontSize, setEditorFontSize } = useContext(SocketContext);
	// Code
	const [cCode, setCCode] = useState(localStorage.getItem('c-code') || '')
	const [jsCode, setJsCode] = useState(localStorage.getItem('js-code') || '')
	const [pyCode, setPyCode] = useState(localStorage.getItem('py-code') || '')
	const [cppCode, setCppCode] = useState(localStorage.getItem('cpp-code') || '')

	const [input, setInput] = useState(localStorage.getItem('input') || '')
	const [output, setOutput] = useState(localStorage.getItem('output') || '')
	const [languageId, setLanguageId] = useState(
		localStorage.getItem('language_id') || 71
	);
	const [currentWindow, setCurrentWindow] = useState(localStorage.getItem('current-window') || 'output')

	useEffect(() => {
		localStorage.setItem('c-code', cCode);
		localStorage.setItem('cpp-code', cppCode);
		localStorage.setItem('js-code', jsCode);
		localStorage.setItem('py-code', pyCode);
		localStorage.setItem('output', output);
		localStorage.setItem('language_id', languageId);
		localStorage.setItem('input', input);
		localStorage.setItem('current-window', currentWindow);
	}, [languageId, input, output, currentWindow, cCode, cppCode, jsCode, pyCode])

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCurrentWindow('output');
		setOutput('Loading...');
		const options = {
			method: 'POST',
			url: 'https://judge0-ce.p.rapidapi.com/submissions',
			params: {
				base64_encoded: 'true',
				wait: 'true',
				fields: '*'
			},
			headers: {
				'content-type': 'application/json',
				'Content-Type': 'application/json',
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
			},
			data: {
				language_id: languageId,
				source_code: btoa(languageId === '50' ? cCode : languageId === '54' ? cppCode : languageId === '62' ? jsCode : pyCode),
				stdin: btoa(input)
			}
		};
		try {
			const response = await axios.request(options);
			setOutput(atob(response.data["stdout"]));
		} catch (error) {
			console.error(error);
			setOutput('Something went wrong');
		}
	}

	return (
		<>
			<div className='flex flex-col p-2 pt-0 pb-0 h-4/6'>
				<span className='flex items-center justify-between rounded-t-md bg-white dark:bg-slate-900 p-2 pl-3 text-md dark:text-gray-400'>
					<span className='font-bold'>Code</span>
					<div>
						<input value={editorFontSize} onChange={e => setEditorFontSize(e.target.value)} title='Font Size' className='dark:bg-gray-800 rounded-md bg-white font-thin mr-2 text-xs p-2 focus:outline-none w-20 appearance-none' type='number' max={52} min={1} />
						<select
							value={editorTheme}
							onChange={e => setEditorTheme(e.target.value)}
							title='Theme'
							className='dark:bg-gray-800 rounded-md bg-white font-thin mr-2 text-xs p-2 appearance-none'
						>
							<option value='light'>Light</option>
							<option value='vs-dark'>Dark</option>
						</select>
						<select
							value={languageId}
							onChange={e => setLanguageId(e.target.value)}
							title='Language'
							className='dark:bg-gray-800 rounded-md bg-white font-thin text-xs p-2 appearance-none'
						>
							<option value='54'>C++</option>
							<option value='50'>C</option>
							<option value='62'>Java</option>
							<option value='71'>Python</option>
						</select>
						<button
							type='submit'
							className='bg-green-400 rounded-md h-7 w-7 p-2 ml-2'
							onClick={handleSubmit}
							title='Run'
						>
							<img src='/run.svg' alt='Run' />
						</button>
					</div>
				</span>
				{
					languageId === '50' ? (
						<CodeEditor code={cCode} setCode={setCCode} language={'c'} />
					) : languageId === '54' ? (
						<CodeEditor code={cppCode} setCode={setCppCode} language={'cpp'} />
					) : languageId === '62' ? (
						<CodeEditor code={jsCode} setCode={setJsCode} language={'java'} />
					) : languageId === '71' ? (
						<CodeEditor code={pyCode} setCode={setPyCode} language={'python'} />
					) : <></>
				}
			</div >
			<div className='flex flex-col p-2 h-2/6 pb-0'>
				<span className='flex rounded-t-md bg-white dark:bg-slate-900 p-2 text-md dark:text-gray-400'>
					<div className='rounded-md bg-gray-100 dark:bg-black p-1 font-thin'>
						<button className={`p-1 px-3 rounded-md ${currentWindow === 'output' ? 'dark:bg-gray-900 bg-white' : 'dark:bg-black bg-gray-100'}`} onClick={_ => setCurrentWindow('output')}>Output</button>
						<button className={`p-1 px-3 rounded-md ${currentWindow === 'input' ? 'dark:bg-gray-900 bg-white' : 'dark:bg-black bg-gray-100'}`} onClick={_ => setCurrentWindow('input')}>Input</button>
					</div>
				</span>
				{
					currentWindow === 'output' ? (
						<CodeEditor code={output} setCode={setOutput} language={'none'} />
					) : (
						<CodeEditor code={input} setCode={setInput} language={'none'} />
					)
				}
			</div >
		</>
	);
};

export default Compiler;
