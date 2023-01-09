import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Bookmark from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import { Avatar } from '@mui/material';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './index.css'

function MainQuestion(){
    const [show, setShow] = useState(false)
    return(
        <div className='main'> 
            <div className='main-container'>
                <div className='main-top'>
                    <h2>This is question title</h2>
                    <Link to='/Add-Question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>Timestap</p>
                        <p>Active<span>today</span></p>
                        <p>Viewed<span>43 times</span></p>
                    </div>
                </div>
                <div className='all-questions'>
                    <div className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p><ThumbUpIcon/></p>
                                <p>0</p>
                                <p><ThumbDownIcon/></p>
                                <Bookmark/>
                                <HistoryIcon/>
                            </div>
                        </div>
                        <div className='question-answer'>
                            <p>This is test queustion body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar/>
                                    <p>username</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='comment'>
                                    <p>This is comment - <span>username</span><small>Timestamp</small></p>
                                </div>
                                <p onClick={()=>setShow(!show)}>add a comment</p>
                                {
                                    show && (<div className='title'>
                                        <textarea typeof='text' placeholder='add your comment...'rows='5'></textarea>
                                        <button>Add comment</button>
                                    </div>)
                                }   
                            </div>
                        </div>
                    </div>     
                </div>
                <div className='all-questions'>
                    <p>No. of Answer</p>
                    <div className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p><ThumbUpIcon/></p>
                                <p>0</p>
                                <p><ThumbDownIcon/></p>
                                <Bookmark/>
                                <HistoryIcon/>
                            </div>
                        </div>
                        <div className='question-answer'>
                            <p>This is test queustion body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar/>
                                    <p>username</p>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
            <div className='main-answer'>
                <h3>Your Answer</h3>
                <ReactQuill theme="snow" className='react-quill'/>
                <button>Post Your Answer</button>
            </div>
        </div>
    )
}

export default MainQuestion