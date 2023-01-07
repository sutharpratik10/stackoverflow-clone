import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/AllQuestions.css'

const AllQuestions = () => {
  return (
    <div className='all-questions'>
      <div className='all-questions-container'>
        <div className='all-questions-left'>
          <div className='all-options'>
            <div className='all-option'>
              <p>0</p>
              <span>votes</span>
            </div>
            
            <div className='all-option'>
              <p>0</p>
              <span>Answers</span>
            </div>
            
            <div className='all-option'>
              <p>0</p>
              <small>Views</small>
            </div>
          
          </div>
        </div>
        <div className='question-answer'>
          <Link to="/question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link>
          <div className='anwser'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div className='tags'>
            <span className='question-tags'>React</span>
            <span className='question-tags'>Antd</span>
            <span className='question-tags'>Frontend</span>
          </div>
          
          <div className='author'>
            <small>Timestamp</small>
            <div className='auth-details'>
              <Avatar/>
              <p>username</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AllQuestions