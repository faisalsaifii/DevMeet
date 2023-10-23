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
    <div className='vidsContainer'>
      {
        callAccepted && !callEnded && (
          <div className='userVideo'>
            <video playsInline ref={userVideo} autoPlay />
            <div>{call.name || 'Someone'}</div>
          </div>
        )
      }
      {stream && (
        <div className='myVideo'>
          <video playsInline muted ref={myVideo} autoPlay />
          <div>
          {name || 'Me'}
          </div>
        </div>
      )}
      
    </div>
  )
}

export default VideoPlayer