import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Compiler = () => {
	const [code, setCode] = useState(localStorage.getItem('code') || '')
	const [input, setInput] = useState(localStorage.getItem('input') || '')
	const [output, setOutput] = useState(localStorage.getItem('output') || '')
	const [languageId, setLanguageId] = useState(
		localStorage.getItem('language_id') || 71
	);
	const [currentWindow, setCurrentWindow] = useState(localStorage.getItem('current-window') || 'output')

	useEffect(() => {
		localStorage.setItem('code', code);
		localStorage.setItem('output', output);
		localStorage.setItem('language_id', languageId);
		localStorage.setItem('input', input);
		localStorage.setItem('current-window', currentWindow);
	}, [code, languageId, input, output, currentWindow])

	const handleSubmit = async (e) => {
		e.preventDefault();
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
				source_code: btoa(code),
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

	const handleTabInput = (e) => {
		if (e.keyCode === 9) {
			e.preventDefault();
			setCode(code + '\t')
			return false;
		}
	}

	return (
		<>
			<div className='flex flex-col p-2 pb-0 h-4/6'>
				<span className='rounded-t-md bg-white dark:bg-slate-900 p-2 pl-3 font-bold text-md dark:text-gray-400'>
					Code
				</span>
				<textarea
					name='solution'
					id='source'
					onChange={e => setCode(e.target.value)}
					className='rounded-b-md dark:bg-slate-900 focus:outline-none p-2 pl-3 font-mono text-xs font-thin h-full'
					value={code}
					onKeyDown={e => handleTabInput(e)}
				></textarea>
			</div>

			<div className='flex flex-col p-2 h-1/6 pb-0'>
				<span className='flex rounded-t-md bg-white dark:bg-slate-900 p-2 text-md dark:text-gray-400'>
					<div className='rounded-md bg-gray-100 dark:bg-black p-1 font-thin'>
						<button className={`p-1 px-3 rounded-md ${currentWindow === 'output' ? 'dark:bg-gray-900 bg-white' : 'dark:bg-black bg-gray-100'}`} onClick={_ => setCurrentWindow('output')}>Output</button>
						<button className={`p-1 px-3 rounded-md ${currentWindow === 'input' ? 'dark:bg-gray-900 bg-white' : 'dark:bg-black bg-gray-100'}`} onClick={_ => setCurrentWindow('input')}>Input</button>
					</div>
				</span>
				{
					currentWindow === 'output' ? (
						<div id='output' className='h-full p-2 pl-3 bg-white rounded-b-md dark:bg-slate-900 focus:outline-none font-mono text-xs font-thin'>
							{output}
						</div>
					) : (
						<textarea id='input' value={input} onChange={e => setInput(e.target.value)} className='h-full rounded-b-md dark:bg-slate-900 focus:outline-none p-2 pl-3 font-mono text-xs font-thin' />
					)
				}
			</div >
			<div className='flex p-2'>
				<select
					value={languageId}
					onChange={e => setLanguageId(e.target.value)}
					id='tags'
					className='dark:bg-gray-900 rounded-md p-2 border-gray-500 border-1'
				>
					<option value='54'>C++</option>
					<option value='50'>C</option>
					<option value='62'>Java</option>
					<option value='71'>Python</option>
				</select>
				<button
					type='submit'
					className='bg-green-400 rounded-md h-10 w-10 p-3 ml-2'
					onClick={handleSubmit}
				>
					<img src='/run.svg' alt='Run' />
				</button>
			</div>

		</>
	);
};

export default Compiler;
