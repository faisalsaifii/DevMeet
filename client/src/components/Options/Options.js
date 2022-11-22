import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { SocketContext } from '../../Context'

import './Options.css'

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
    <div>
        <div>
          <h2>Account Info</h2>
          <label>
            Name
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <CopyToClipboard text={me}>
            <button>
              Copy ID
            </button>
          </CopyToClipboard>
        </div>
        <div>
          <h2>Make a call</h2>
          <label>
            ID to call
            <input type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
          </label>
          { callAccepted && !callEnded ? (
            <button
              onClick={leaveCall}
            >
              Hang Up
            </button>
            ) : (
            <button
              onClick={() => callUser(idToCall)}
            >
              Call
            </button>
          )}
        </div>
      {children}
    </div>
  )
}

export default Options