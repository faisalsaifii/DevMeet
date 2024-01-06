import React, { useState, useEffect } from 'react';

const Compiler = () => {
	const [input, setInput] = useState(localStorage.getItem('input') || '');
	const [languageId, setLanguageId] = useState(
		localStorage.getItem('language_Id') || 2
	);
	const [userInput, setUserInput] = useState('');

	useEffect(() => {
		localStorage.setItem('input', input);
		localStorage.setItem('language_Id', languageId);
	}, [input, languageId]);

	const handleInput = (event) => {
		setInput(event.target.value);
	};

	const handleUserInput = (event) => {
		setUserInput(event.target.value);
	};

	const handleLanguage = (event) => {
		setLanguageId(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let outputText = document.getElementById('output');
		outputText.innerHTML = '';
		outputText.innerHTML += 'Creating Submission ...\n';
		const response = await fetch(
			'https://judge0-ce.p.rapidapi.com/submissions',
			{
				method: 'POST',
				headers: {
					'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
					'x-rapidapi-key':
						'8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da',
					'content-type': 'application/json',
					accept: 'application/json',
				},
				body: JSON.stringify({
					source_code: input,
					stdin: userInput,
					language_id: languageId,
				}),
			}
		);

		outputText.innerHTML += 'Submission Created ...\n';
		const jsonResponse = await response.json();
		let jsonGetSolution = {
			status: { description: 'Queue' },
			stderr: null,
			compile_output: null,
		};
		while (
			jsonGetSolution.status.description !== 'Accepted' &&
			jsonGetSolution.stderr == null &&
			jsonGetSolution.compile_output == null
		) {
			outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
			if (jsonResponse.token) {
				let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
				const getSolution = await fetch(url, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
						'x-rapidapi-key':
							'8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da',
						'content-type': 'application/json',
					},
				});
				jsonGetSolution = await getSolution.json();
			}
		}

		if (jsonGetSolution.stdout) {
			const output = atob(jsonGetSolution.stdout);
			outputText.innerHTML = '';
			outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
		} else if (jsonGetSolution.stderr) {
			const error = atob(jsonGetSolution.stderr);
			outputText.innerHTML =
				'8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da';
			outputText.innerHTML += `\n Error :${error}`;
		} else {
			const compilationError = atob(jsonGetSolution.compile_output);
			outputText.innerHTML = '';
			outputText.innerHTML += `\n Error :${compilationError}`;
		}
	};

	return (
		<>
			<div className='flex flex-col p-2 h-4/6'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Code
				</span>
				<textarea
					required
					name='solution'
					id='source'
					onChange={handleInput}
					className='rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin h-full'
					value={input}
				></textarea>
			</div>
			<div className='flex flex-col p-2 h-1/6'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Output
				</span>
				<textarea id='output' className='h-full rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin'></textarea>
			</div>
			<div className='flex flex-col p-2'>
				<span className='rounded-t-md dark:bg-slate-900 pl-2 font-bold text-md dark:text-gray-400'>
					Input
				</span>
				<br />
				<textarea id='input' onChange={handleUserInput} className='rounded-b-md dark:bg-slate-900 focus:outline-none pl-2 font-mono text-xs font-thin'></textarea>
			</div>
			<div className='flex p-2'>
				<select
					value={languageId}
					onChange={handleLanguage}
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
