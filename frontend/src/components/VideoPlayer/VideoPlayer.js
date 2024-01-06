import React, { useContext } from 'react'
import { SocketContext } from '../../Context'

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call
  } = useContext(SocketContext);
  return (
    <div className='flex flex-col'>
      {
        callAccepted && !callEnded && (
          <div className='rounded-md p-1 bg-gray-800 mb-2'>
            <video playsInline ref={userVideo} autoPlay className='rounded-md w-full' />
            <span className='font-black text-gray-400 ml-1'>
              {call.name || 'Someone'}
            </span>
          </div>
        )
      }
      {stream && (
        <div className='rounded-md p-1 bg-gray-800'>
          <video playsInline muted ref={myVideo} autoPlay className='rounded-md w-full' />
          <span className='font-black text-gray-400 ml-1'>
            {name || 'Me'}
          </span>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer