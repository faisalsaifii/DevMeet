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
          <div className='flex ml-2 mt-2 items-center justify-between'>
            <span className='font-bold'>{call.name || "Someone"} has sent an invite</span>
            <button onClick={answerCall} className='bg-green-400 rounded-md p-2 ml-2'>
              <span className='text-white'>Join</span>
            </button>
          </div>
        )
      }
    </>
  )
}

export default Notifications