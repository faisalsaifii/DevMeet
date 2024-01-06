import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Compiler = () => {
	const [code, setCode] = useState(localStorage.getItem('code') || '')
	const [input, setInput] = useState(localStorage.getItem('input') || '')
	const [output, setOutput] = useState(localStorage.getItem('output') || '')
	const [languageId, setLanguageId] = useState(
		localStorage.getItem('language_id') || 71
	);

	useEffect(() => {
		localStorage.setItem('code', code);
		localStorage.setItem('output', output);
		localStorage.setItem('language_id', languageId);
		localStorage.setItem('input', input);
	}, [code, languageId, input, output])

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

	return (
		<>
			<div className='flex flex-col p-2 h-4/6'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Code
				</span>
				<textarea
					name='solution'
					id='source'
					onChange={e => setCode(e.target.value)}
					className='rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin h-full'
					value={code}
				></textarea>
			</div>
			<div className='flex flex-col p-2 h-1/6'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Output
				</span>
				<div id='output' className='h-full rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin'>{output}</div>
			</div>
			<div className='flex flex-col p-2'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Input
				</span>
				<br />
				<textarea id='input' value={input} onChange={e => setInput(e.target.value)} className='rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin'></textarea>
			</div>
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
				<a href='https://github.com/faisalsaifii/DevMeet' target='_blank' rel='noreferrer' className='font-black p-2 hover:bg-gray-600 rounded-md ml-2'>Github Repo</a>
				<a href='https://github.com/faisalsaifii/DevMeet/graphs/contributors' target='_blank' rel='noreferrer' className='font-black p-2 hover:bg-gray-600 rounded-md ml-2'>Contributors</a>
				<img className='h-8 m-1' src='/logo.svg' alt='Logo' />
			</div>

		</>
	);
};

export default Compiler;
