import React, { useContext } from 'react'
import { SocketContext } from '../../Context'

const Notifications = () => {
  const {
    call,
    answerCall,
    callAccepted,
    leaveCall,
    callEnded
  } = useContext(SocketContext);

  return (
    <>
      {
        call.isReceivingCall && !callAccepted && !callEnded && (
          <div className='flex flex-col absolute bottom-0 right-0 p-4 m-10 rounded-md justify-between bg-white dark:bg-gray-800'>
            <span className='pr-20 text-3xl font-thin'>{call.name || "Somebody"} has sent an invite</span>
            <div className='flex justify-end items-center mt-10'>
              <button onClick={answerCall} className='p-2 font-bold bg-green-400 rounded-md'>
                Accept
              </button>
              <button title='Close' className="p-2 m-2 font-bold bg-red-500 rounded-md" onClick={leaveCall}>Decline</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Notifications