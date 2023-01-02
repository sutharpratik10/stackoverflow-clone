/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import './css/index.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import ChatIcon from '@mui/icons-material/Chat';


function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          <a><img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg" alt='logo'/></a>
          <h3>Products</h3>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
            <SearchIcon />
            <input type='text' placeholder='Search...' />
          </div>
        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <AccountBoxIcon />
            <InboxIcon/>
            <HelpIcon/>
            <ChatIcon/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header