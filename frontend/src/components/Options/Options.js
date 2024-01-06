import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../../Context'

const Options = ({ children }) => {
  const {
    me,
    name,
    setName,
    callAccepted,
    leaveCall,
    callUser,
    callEnded
  } = useContext(SocketContext)

  const [idToCall, setIdToCall] = useState('')

  return (
    <div className='flex flex-col'>
      <div className='flex items-center mt-2'>
        <input className='w-full dark:bg-gray-800 rounded-tl-md p-2 border-0 focus:outline-none focus:dark:bg-gray-700 font-thin' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <CopyToClipboard text={me}>
          <button className='bg-green-400 rounded-r-md h-10 w-10 p-2'>
            <img src='/copy.svg' alt='Copy ID' />
          </button>
        </CopyToClipboard>
      </div>
      <div className='flex items-center mt-2'>
        <input className='w-full dark:bg-gray-800 rounded-tl-md p-2 border-0 focus:outline-none focus:dark:bg-gray-700 font-thin' type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder='ID to Call' />
        {callAccepted && !callEnded ? (
          <button
            onClick={leaveCall}
            className='bg-red-400 rounded-r-md h-10 w-10 p-2'
          >
            <img src='/cut.svg' alt='Hang Up' />
          </button>
        ) : (
          <button
            onClick={() => callUser(idToCall)}
            className='bg-green-400 rounded-r-md h-10 w-10 p-2'
          >
            <img src='/call.svg' alt='Call' />
          </button>
        )}
      </div>
      {children}
    </div >
  )
}

export default Options