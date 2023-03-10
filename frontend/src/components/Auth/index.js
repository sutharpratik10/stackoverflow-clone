import React, { useState } from 'react';
import {signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from '../../firebase';
import { useHistory } from 'react-router-dom';
import './index.css'


const Index = () => {
    const [register, setRegister] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState("")
    const history = useHistory()

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            console.log(res)
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if(email === "" || password === '' || username === ""){
            setError("Required field is missing")
            setLoading(false)
        }else {
            createUserWithEmailAndPassword(auth, email, password).then((res) =>  {
                setLoading(false);
                history.push("/");
                console.log(res);
            }).catch((error)=>{
                console.log(error)
                setError(error.message)
                setLoading(false)
            })
        }
    };
    const handleSignIn = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if(email === "" || password === "")
        {
            setError("Required field is missing")
            setLoading(false)
        }
        else {
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res);
                history.push("/");
                setLoading(false);
            }).catch((error)=> {
                console.log(error.code)
                setError(error.message)
                setLoading(false) 
            })
        }
    }

  return (
    <div className='auth'>
        <div className='auth-container'>
            <p>Add another way to log in using any of the following services. </p>
            <div className="sign-options">
                <div onClick={handleSignInGoogle} className="single-option">
                    <span className='logo'><GoogleIcon/></span> 
                    <p>{loading ? "logging in..." : "Login with Google"} </p>
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
                                <input placeholder='username' 
                                    value={username} onChange={(e) => setUsername(e.target.value)} 
                                    type="text" 
                                />
                                </div>
                                <div className="input-field">
                                <p>Email</p>
                                <input
                                    placeholder='email'
                                    value= {email} onChange={(e)=> setEmail(e.target.value)}
                                    type="email"
                                />
                                </div>
                                <div className="input-field">
                                <p>Password</p>
                                <input
                                    placeholder='password'
                                    value= {password} onChange={(e)=> setPassword(e.target.value)}
                                    type="password"
                                />
                                </div>
                                <button onClick={handleRegister} disabled='' className='auth-button'>{loading ? "Registering..." : "Register"}
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
                                    value= {email} onChange={(e)=> setEmail(e.target.value)}
                                    type="email"
                                />
                                </div>
                                <div className="input-field">
                                <p>Password</p>
                                <input
                                    placeholder='password'
                                    value={password} onChange={(e)=> setPassword(e.target.value)}
                                    type="password"
                                />
                                </div>
                                <button onClick= {handleSignIn} disabled='' className='auth-button'>{loading ? "logging in..." : "login"}
                                </button>
                            </>
                        )
                    }
                    <p onClick={() => setRegister(!register)}> {register ? "Login" : "Register"} ? </p>
                </div>
            </div>
            {
                error !== "" && (<p className='errormessage'> {error}</p>)
            }
        </div>
        
    </div>
  )
}

export default Index