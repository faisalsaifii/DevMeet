import { useEffect, useState, setInterval } from 'react';

const NavBar = () => {
	const [theme, setTheme] = useState('light');
	// const [seconds, setSeconds] = useState(0);
	// const [minutes, setMinutes] = useState(0);
	// useEffect(() => {
	// 	setInterval(() => {
	// 		setSeconds(seconds + 1);
	// 		if (seconds === 59) {
	// 			setSeconds(0);
	// 			setMinutes(minutes + 1);
	// 		}
	// 	}, 1000);
	// });

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
	return (
		<div class='fixed bottom-0 left-0 z-50 grid w-full h-16 grid-cols-1 px-8 bg-white border-t border-gray-200 md:grid-cols-3 dark:bg-gray-900 dark:border-gray-800'>
			<div class='items-center justify-center hidden mr-auto text-gray-500 dark:text-gray-400 md:flex'>
				<svg
					class='w-4 h-4 mr-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
					aria-hidden='true'
				>
					<path
						clip-rule='evenodd'
						fill-rule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
					></path>
				</svg>
				<span class='text-sm'>13:21:21</span>
			</div>
			<div class='flex items-center justify-center mx-auto'>
				<button
					data-tooltip-target='tooltip-microphone'
					type='button'
					class='p-2.5 group bg-gray-100 rounded-full hover:bg-gray-200 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							clip-rule='evenodd'
							fill-rule='evenodd'
							d='M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z'
						></path>
					</svg>
					<span class='sr-only'>Mute microphone</span>
				</button>
				<div
					id='tooltip-microphone'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Mute microphone
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target='tooltip-camera'
					type='button'
					class='p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
					</svg>
					<span class='sr-only'>Hide camera</span>
				</button>
				<div
					id='tooltip-camera'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Hide camera
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target='tooltip-feedback'
					type='button'
					class='p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							clip-rule='evenodd'
							fill-rule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z'
						></path>
					</svg>
					<span class='sr-only'>Share feedback</span>
				</button>
				<div
					id='tooltip-feedback'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Share feedback
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target='tooltip-settings'
					type='button'
					class='p-2.5 bg-gray-100 group rounded-full mr-4 md:mr-0 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
					</svg>
					<span class='sr-only'>Video settings</span>
				</button>
				<div
					id='tooltip-settings'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Video settings
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					id='moreOptionsDropdownButton'
					data-dropdown-toggle='moreOptionsDropdown'
					type='button'
					class='p-2.5 bg-gray-100 md:hidden group rounded-full hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
					</svg>
					<span class='sr-only'>Show options</span>
				</button>
				<div
					id='moreOptionsDropdown'
					class='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
				>
					<ul
						class='py-2 text-sm text-gray-700 dark:text-gray-200'
						aria-labelledby='moreOptionsDropdownButton'
					>
						<li>
							<a
								href='#'
								class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Show participants
							</a>
						</li>
						<li>
							<a
								href='#'
								class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Adjust volume
							</a>
						</li>
						<li>
							<a
								href='#'
								class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Show information
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class='items-center justify-center hidden ml-auto md:flex'>
				<button
					data-tooltip-target='tooltip-participants'
					type='button'
					class='p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600'
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
					</svg>
					<span class='sr-only'>Toggle Theme</span>
				</button>
				<div
					id='tooltip-participants'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Show participants
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target='tooltip-volume'
					type='button'
					class='p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							clip-rule='evenodd'
							fill-rule='evenodd'
							d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z'
						></path>
					</svg>
					<span class='sr-only'>Adjust volume</span>
				</button>
				<div
					id='tooltip-volume'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Adjust volume
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target='tooltip-information'
					type='button'
					class='p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600'
				>
					<svg
						class='w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							clip-rule='evenodd'
							fill-rule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
						></path>
					</svg>
					<span class='sr-only'>Show information</span>
				</button>
				<div
					id='tooltip-information'
					role='tooltip'
					class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
				>
					Show information
					<div class='tooltip-arrow' data-popper-arrow></div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
