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
    <div className='container'>
      {stream && (
        <div>
          <h1>{name || 'Me'}</h1>
          <video playsInline muted ref={myVideo} autoPlay />
      </div>
      )}
      {
        callAccepted && !callEnded && (
          <div>
            <h1>{call.name || 'name'}</h1>
            <video playsInline ref={userVideo} autoPlay />
          </div>
        )
      }
    </div>
  )
}

export default VideoPlayer