import React from 'react'
import '../css/index.css'
import './css/index.css'
import './css/Main.css'
import "./css/Sidebar.css";

import PublicIcon from '@mui/icons-material/Public';
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-container'>
            <div className='sidebar-options'>
                <div className='sidebar-option'>
                    <Link>Home</Link>
                </div>
                <div className='sidebar-option'>
                    <Link className='link'>PUBLIC</Link>
                    <div className='link'>
                        <div className='link-tag'>
                            <Link><PublicIcon className='MuiSvgIcon-root'/>Questions</Link>
                        </div>
                    </div>
                    <div className='tags'>
                        <p>Tags</p>
                    </div>
                    <div className='tags'>
                    <p>Users</p>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <Link>COLLECTIVES</Link>
                    <div className='link'>
                        <div className='link-tag'>
                            <Link><StarsIcon className='MuiSvgIcon-root'/>Explore Collectives</Link>
                        </div>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <Link>FIND A JOB</Link>
                    <div className='tags'>
                        <p>Jobs</p>
                    </div>
                    <div className='tags'>
                        <p>Companies</p>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <Link>TEAMS</Link>
                    <div className='link'>
                        <div className='link-tag'>
                            <Link><WorkIcon className='MuiSvgIcon-root'/>Companies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar