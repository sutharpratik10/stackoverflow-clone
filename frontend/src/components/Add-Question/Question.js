import React from 'react'
import ReactQuill from 'react-quill'
import { TagsInput } from 'react-tag-input-component'

import 'react-quill/dist/quill.snow.css';
import './index.css'

const Question = () => {
  return (
    <div className='add-question'>
      <div className='add-question-container'>
        <div className='head-title'>
          <h1>Ask a Public question</h1>
        </div>
        <div className='question-container'>
          <div className='question-options'>
            <div className='question-option'>
              <div className='title'>
                <h3>Title</h3>
                <small>Be specific you are asking a question to another person</small>
                <imput type="text" placeholder = 'Add the question title'/>
              </div>
            </div>
            <div className='question-option'>
              <div className='title'>
                <h3>Body</h3>
                <small>Include all the information someone would need to answere your question</small>
                <ReactQuill theme="snow"/>
              </div>
            </div>
            <div className='question-option'>
              <div className='title'>
                <h3>Tags</h3>
                <small>Add up to 5 tags to describe what you question is about</small>
                {/* <TagsInput name='Tags' placeholder='Press enter to add new tag'/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question