import React, { useContext } from 'react'
import { SocketContext } from '../../Context'
import CallIcon from './call.svg'
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
            <h2>{call.name || "Someone"} is calling</h2>
            <button onClick={answerCall}>
              <img src={CallIcon} alt='Answer' />
            </button>
          </div>
        )
      }
    </>
  )
}

export default Notifications