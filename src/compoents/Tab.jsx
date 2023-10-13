import React, { useState } from 'react'
import Replystyle from './Replystyle'
import NotesStyle from './NotesStyle'
import './Tab.css'

function Tab() {
  const [activeTab, setActiveTab] = useState('reply')
  return (
    <div className="tab">
      <button
        style={{
          color: activeTab === 'reply' ? '#0081FD' : '#A2A9AF',
          borderBottom: activeTab === 'reply' ? '3px solid #0081FD' : 'none',
        }}
        onClick={() => setActiveTab('reply')}
      >
        Reply
      </button>
      <button
        style={{
          color: activeTab === 'notes' ? '#0081FD' : '#A2A9AF',
          borderBottom: activeTab === 'notes' ? '3px solid #0081FD' : 'none',
        }}
        onClick={() => setActiveTab('notes')}
      >
        Notes
      </button>
      {activeTab === 'notes' && <NotesStyle />}
      {activeTab === 'reply' && <Replystyle />}
    </div>
  )
}

export default Tab
