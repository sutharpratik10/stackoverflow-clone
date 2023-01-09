import React, { useState } from 'react'

import GoogleIcon from '@mui/icons-material/Google';
import './index.css'

const Index = () => {
    const [register, setRegister] = useState(true)
    const [loading] = useState(false) 
  return (
    <div className='auth'>
        <div className='auth-container'>
            <p>Add another way to log in using any of the following services. </p>
            <div className="sign-options">
                <div className="single-option">
                    <span className='logo'><GoogleIcon/></span> 
                    <p>Login with Google</p>
                </div>
            </div>
            <div className='auth-login'>
                <div className='auth-login-container'>
                    {register ? 
                        (
                            <>
                                {" "}
                                <div className="input-field">
                                <p>Username</p>
                                <input
                                    placeholder='username'
                                    value=''
                                    type="text"
                                />
                                </div>
                                <div className="input-field">
                                <p>Email</p>
                                <input
                                    placeholder='email'
                                    value=''
                                    type="email"
                                />
                                </div>
                                <div className="input-field">
                                <p>Password</p>
                                <input
                                    placeholder='password'
                                    value=''
                                    type="password"
                                />
                                </div>
                                <button onClick='' disabled='' className='auth-button'>{loading ? "Registering..." : "Register"}
                                </button>
                            </>
                        ) : 
                        (
                            <>
                                {" "}
                                <div className="input-field">
                                <p>Email</p>
                                <input
                                    placeholder='email'
                                    value=''
                                    type="email"
                                />
                                </div>
                                <div className="input-field">
                                <p>Password</p>
                                <input
                                    placeholder='password'
                                    value=''
                                    type="password"
                                />
                                </div>
                                <button onClick='' disabled='' className='auth-button'>{loading ? "logging in..." : "login"}
                                </button>
                            </>
                        )
                    }
                    <p onClick={() => setRegister(!register)}> {register ? "Login" : "Register"} ? </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Index