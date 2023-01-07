import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

import './index.css'
import '../css/index.css'
import '../StackOverflow/css/index.css'
import '../StackOverflow/css/Main.css'
import "../StackOverflow/css/Sidebar.css";


import MainQuestion from './MainQuestion'
import Sidebar from '../StackOverflow/Sidebar'

const index = () => {
  return (
    <Container maxWidth="xl">
        <div className='stack-index-content'>
            <Sidebar/>
            <MainQuestion/>
        </div>
    </Container>
  )
}

export default index;