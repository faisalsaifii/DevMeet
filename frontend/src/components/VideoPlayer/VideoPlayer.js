import React, { useContext } from 'react';
import { SocketContext } from '../../Context';

const VideoPlayer = () => {
	const {
		name,
		callAccepted,
		myVideo,
		userVideo,
		callEnded,
		stream,
		call,
		currentWindow,
	} = useContext(SocketContext);
	return (
		<div
			className={`flex h-full ${
				currentWindow !== 'meet' ? 'flex-col' : 'pb-20'
			}`}
		>
			{callAccepted && !callEnded && (
				<div
					className={`relative flex items-center justify-center rounded-md bg-gray-100 dark:bg-black ${
						currentWindow === 'meet' ? 'mr-2' : 'mb-2'
					}`}
				>
					<video
						playsInline
						ref={userVideo}
						autoPlay
						className='rounded-md max-h-full max-w-full w-auto h-auto overflow-hidden'
					/>
					<span className='font-black text-gray-400 bottom-1 absolute'>
						{call.name || 'Someone'}
					</span>
				</div>
			)}
			{stream && (
				<div
					className={`relative flex items-center justify-center rounded-md bg-gray-100 dark:bg-black ${
						currentWindow === 'meet' ? '' : ''
					}`}
				>
					<video
						playsInline
						muted
						ref={myVideo}
						autoPlay
						className='rounded-md max-h-full max-w-full w-auto h-auto overflow-hidden'
					/>
					<span className='font-black text-gray-400 bottom-1 absolute'>
						{name || 'Me'}
					</span>
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
