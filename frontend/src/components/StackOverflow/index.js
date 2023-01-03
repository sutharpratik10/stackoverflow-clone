import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

import '../css/index.css'
import './css/index.css'
import './css/Main.css'
import "./css/Sidebar.css";

import Main from './Main'
import Sidebar from './Sidebar'

const index = () => {
  return (
    <Container maxWidth="xl">
        <div className='stack-index-content'>
            <Sidebar/>
            <Main/>
        </div>
    </Container>
  )
}

export default index