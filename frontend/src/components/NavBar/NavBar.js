import { useContext } from "react";
import { SocketContext } from "../../Context";

const NavBar = ({ setShowInfo }) => {
	const { currentWindow, setCurrentWindow } = useContext(SocketContext);

	return (
		<nav className='absolute top-0 w-full h-10 flex items-center p-2 justify-between'>
			<a href="https://developermeet.vercel.app"><img className='h-6 rounded-full' src='/Logo.svg' alt='logo' /></a>
			<div className="flex rounded-md p-1 bg-purple-800">
				<button className={`p-1 rounded-md ${currentWindow === 'meet' && 'bg-purple-400'}`} onClick={_ => setCurrentWindow('meet')}><img className='h-4' src='/img/call.svg' alt='Meet' /></button>
				<button className={`p-1 ml-1 rounded-md ${currentWindow === 'both' && 'bg-purple-400'}`} onClick={_ => setCurrentWindow('both')}><img className='h-3.5' src='/img/window.svg' alt='Both' /></button>
				<button className={`p-1 ml-1 rounded-md ${currentWindow === 'code' && 'bg-purple-400'}`} onClick={_ => setCurrentWindow('code')}><img className='h-3.5' src='/img/code.svg' alt='Code' /></button>
			</div>
			<div className="flex">
				<a href='https://github.com/sponsors/faisalsaifii' target='_blank' rel='noreferrer' className='flex px-2 items-center justify-center mx-2 text-xs font-thin rounded-md dark:bg-gray-800'>
					Sponsor
				</a>
				<a href='https://github.com/faisalsaifii/DevMeet' target='_blank' rel='noreferrer' className='m-1 h-6 rounded-full'><img className='h-full rounded-full' src='/img/github.svg' alt='Github' /></a>
				<button className="m-1 h-6 bg-purple-400 rounded-full" title="Info" onClick={_ => setShowInfo(true)}><img className='h-full' src='/img/info.svg' alt='Info' /></button>
			</div>

		</nav>
	);
};

export default NavBar;
