import React from 'react'

import '../css/index.css'
import './css/index.css'
import './css/Main.css'
import "./css/Sidebar.css";

import Main from './Main'
import Sidebar from './Sidebar'

const index = () => {
  return (
    <div className='stck-index'>
        <div className='stack-index-content'>
            <Sidebar/>
            <Main/>
        </div>
    </div>
  )
}

export default index