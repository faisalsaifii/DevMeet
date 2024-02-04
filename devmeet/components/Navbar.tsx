import Image from "next/image";
import React from "react";

const Navbar: React.FC<{
	setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowInfo }) => {

	return (
		<nav className='absolute top-0 w-full h-18 flex items-center p-2 justify-between'>
			<a href="https://developermeet.vercel.app"><Image className='h-10 rounded-full' src='/img/logo.svg' alt='Logo' /></a>
			<div className='rounded-md bg-gray-200 dark:bg-gray-900 p-1 font-thin'>
				{/* <button className={`p-1 px-3 rounded-md ${currentWindow === 'meet' ? 'dark:bg-black bg-white' : 'dark:bg-gray-900 bg-gray-200'}`} onClick={_ => setCurrentWindow('meet')}>Meet</button>
				<button className={`p-1 px-3 rounded-md ${currentWindow === 'both' ? 'dark:bg-black bg-white' : 'dark:bg-gray-900 bg-gray-200'}`} onClick={_ => setCurrentWindow('both')}>Home</button>
				<button className={`p-1 px-3 rounded-md ${currentWindow === 'code' ? 'dark:bg-black bg-white' : 'dark:bg-gray-900 bg-gray-200'}`} onClick={_ => setCurrentWindow('code')}>Code</button> */}
			</div>
			<div className="flex">
				<a href='https://github.com/sponsors/faisalsaifii' target='_blank' rel='noreferrer' className='flex p-2 items-center justify-center mx-2 text-xs font-thin rounded-md bg-gray-200 dark:bg-gray-800'>
					Sponsor
				</a>
				<a href='https://github.com/faisalsaifii/DevMeet' target='_blank' rel='noreferrer' className='m-1 h-6 rounded-full'><Image className='h-full rounded-full' src='/img/github.svg' alt='Github' /></a>
				<button className="m-1 h-6 bg-purple-400 rounded-full" title="Info" onClick={_ => setShowInfo(true)}><Image className='h-full' src='/img/info.svg' alt='Info' /></button>
			</div>

		</nav>
	);
};

export default Navbar;
