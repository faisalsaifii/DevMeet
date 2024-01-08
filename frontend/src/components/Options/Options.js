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
        <input className='w-full dark:bg-gray-800 rounded-l-md p-4 border-0 focus:outline-none focus:dark:bg-gray-700 font-thin' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <div className='p-2 dark:bg-gray-800 bg-white rounded-r-md'>
          <CopyToClipboard text={me}>
            <button className='bg-purple-400 rounded-md h-10 w-10 p-2' title='Copy Meet ID'>
              <img src='/copy.svg' alt='Copy ID' />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className='flex items-center mt-2'>
        <input className='w-full dark:bg-gray-800 rounded-l-md p-4 border-0 focus:outline-none focus:dark:bg-gray-700 font-thin' type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder='ID to Call' />
        <div className='p-2 dark:bg-gray-800 bg-white rounded-r-md'>
          {
            idToCall ? (callAccepted && !callEnded ? (
              <button
                onClick={leaveCall}
                className='bg-red-400 rounded-md h-10 w-10 p-2'
                title='Hang Up'
              >
                <img src='/cut.svg' alt='Hang Up' />
              </button>
            ) : (
              <button
                onClick={() => callUser(idToCall)}
                className='bg-green-400 rounded-md h-10 w-10 p-2'
                title='Call'
              >
                <img src='/call.svg' alt='Call' />
              </button>
            )) : <div className='h-10 w-10 p-2'></div>
          }
        </div>

      </div>
      {children}
    </div >
  )
}

export default Options