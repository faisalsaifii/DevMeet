const NavBar = () => {
	return (
		<nav className='flex items-center px-2 pt-2 justify-between'>
			<img className='h-8 rounded-full' src='/Logo.svg' alt='logo' />
			<div className="sm:hidden flex rounded-md p-1 bg-purple-800">
				<button className="p-1 mr-1 rounded-md bg-purple-400"><img className='h-4' src='/img/call.svg' alt='Call' /></button>
				<button className="p-1 ml-1"><img className='h-4' src='/img/code.svg' alt='Code' /></button>
			</div>
			<a href='https://github.com/faisalsaifii/DevMeet' target='_blank' rel='noreferrer' className='m-1'><img className='h-6 rounded-full' src='/img/github.svg' alt='logo' /></a>
		</nav>
	);
};

export default NavBar;
