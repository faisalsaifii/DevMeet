import React, { useContext } from 'react'
import { SocketContext } from '../../Context'
const Notifications = () => {
  const {
    call,
    answerCall,
    callAccepted
  } = useContext(SocketContext);

  return (
    <>
      {
        call.isReceivingCall && !callAccepted && (
          <div>
            <h2>{call.name} is calling</h2>
            <button onClick={answerCall}>Answer</button>
          </div>
        )
      }
    </>
  )
}

export default Notifications