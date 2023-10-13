import React, { useState } from 'react'
import { ImAttachment } from 'react-icons/im'
import './FileUpload.css'
import { IoSend } from 'react-icons/io5'

import FileUploadModal from './FileUploadModal'

function FileUpload({ HandleMessage }) {
  //   console.log(HandleMessage)

  const [attachments, setAttachments] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleFileSelect = (file) => {
    setAttachments([...attachments, file])
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="main-file">
      <div className="file">
        <div className="attach">
          <ImAttachment
            style={{ cursor: 'pointer' }}
            onClick={handleShowModal}
          />
        </div>
        {showModal && <FileUploadModal onFileSelect={handleFileSelect} />}
        <div className="sendbox">
          <IoSend style={{ cursor: 'pointer', color: '#fff' }} size={30} />
        </div>
      </div>
    </div>
  )
}

export default FileUpload
