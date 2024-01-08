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
          <div className='flex p-2 pl-4 mt-2 rounded-md items-center justify-between bg-white dark:bg-gray-800'>
            <span className='font-bold'>{call.name || "Someone"} has sent an invite</span>
            <button onClick={answerCall} className='bg-green-400 rounded-md h-10 w-10 p-2 ml-2'>
              <span className='text-white'><img src='/img/plus.svg' alt='logo' /></span>
            </button>
          </div>
        )
      }
    </>
  )
}

export default Notifications