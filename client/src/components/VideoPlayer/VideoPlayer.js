import React, { useContext } from 'react'
import './VideoPlayer.css'
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
    <div className='vids'>
      {stream && (
        <div className='left'>
          <video playsInline muted ref={myVideo} autoPlay />
          {name || 'Me'}
        </div>
      )}
      {
        callAccepted && !callEnded && (
          <div className='right'>
            <video playsInline ref={userVideo} autoPlay />
            {call.name || 'name'}
          </div>
        )
      }
    </div>
  )
}

export default VideoPlayer