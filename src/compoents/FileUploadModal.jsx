import React, { useState, useRef } from 'react'
import './FileUploadModal.css'
import { MdPhotoSizeSelectActual } from 'react-icons/md'
import { HiOutlineDocument } from 'react-icons/hi'
import { RiContactsFill } from 'react-icons/ri'
import { BiPoll } from 'react-icons/bi'
import { BsFillPenFill } from 'react-icons/bs'
import { GrAttachment } from 'react-icons/gr'

const FileUploadModal = ({ onFileSelect, HandleMessage }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleFileUpload = () => {
    if (selectedFile) {
      onFileSelect(selectedFile)
    }
    console.log(selectedFile)
  }

  const openFilePicker = () => {
    fileInputRef.current.click()
  }
  return (
    <>
      <div className="file-upload-modal">
        <label className="photo" onClick={openFilePicker}>
          <MdPhotoSizeSelectActual />
          <span>Photo & Videos</span>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*,.json"
          onChange={handleFileSelect}
        />

        <label className="photo" onClick={openFilePicker}>
          <HiOutlineDocument size={23} />
          <span>Document</span>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".pdf,.docx"
          onChange={handleFileSelect}
        />
        <label className="photo" onClick={openFilePicker}>
          <RiContactsFill />
          <span>Contact</span>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".pdf,.docx,image/*,.json"
          onChange={handleFileSelect}
        />
        <label onClick={openFilePicker}>
          <BiPoll size={25} />
          <span>Poll</span>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".json"
          onChange={handleFileSelect}
        />
        <label onClick={openFilePicker}>
          <BsFillPenFill />
          <span>Drawing</span>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".png,.jpg,.jpeg,.gif"
          onChange={handleFileSelect}
        />

        <GrAttachment
          style={{
            paddingTop: '10px',
            cursor: 'pointer',
            color: '#F5F9F2!important',
          }}
          onClick={handleFileUpload}
          className="senddata"
        />
      </div>
    </>
  )
}

export default FileUploadModal
