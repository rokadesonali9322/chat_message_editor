import React, { useState } from 'react'
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'
import { MdFormatStrikethrough } from 'react-icons/md'
import { IoCodeSlash } from 'react-icons/io5'
import FileUpload from './FileUpload'
import { FaRegFaceGrinWide } from 'react-icons/fa6'

function Replystyle() {
  const [message, setMessage] = useState('')
  const [isBold, setBold] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [isUnderline, setUnderline] = useState(false)
  const [isCode, setCode] = useState(false)
  const [isStrikethrough, setStrikethrough] = useState(false)
  return (
    <div className="msgbox">
      <textarea
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          fontFamily: isCode ? 'monospace' : 'inherit',
          textDecorationLine: isStrikethrough ? 'line-through' : 'none',
        }}
      />

      <div className="mainicon">
        <div className="styleicon">
          <FaRegFaceGrinWide style={{ fontSize: '18px', fontWeight: 'bold' }} />
          <FaBold
            onClick={() => setBold(!isBold)}
            style={{ cursor: 'pointer', padding: '0 20px' }}
          />
          <FaItalic
            onClick={() => setItalic(!isItalic)}
            style={{ cursor: 'pointer' }}
          />
          <FaUnderline
            onClick={() => setUnderline(!isUnderline)}
            style={{ cursor: 'pointer', padding: '0 20px' }}
          />
          <MdFormatStrikethrough
            onClick={() => setStrikethrough(!isStrikethrough)}
            style={{
              cursor: 'pointer',

              fontSize: '1.3rem',
            }}
          />
          <IoCodeSlash
            onClick={() => setCode(!isCode)}
            style={{
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: '2000',
              padding: '0 20px',
            }}
          />
        </div>
        <FileUpload />
      </div>
    </div>
  )
}

export default Replystyle
