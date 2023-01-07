import { Button } from 'bootstrap'
import React from 'react'
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './login.css'
function Login() {
    const [error, setError] = useState({
        emailErr: '',
        passwordErr: '',
    })
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    return (
        <>
            <div className='align'>
                <div className='login'>
                    <h1>Login</h1>
                    <input type='email' name="email" placeholder='Enter Your Email' /><br></br>
                    <input type='password' name="password" placeholder='Enter Your Password' /><br></br>
                    <div className='login-btn'>
                        <p>don't have account <span><Link to="/signin">sign up</Link></span></p>
                        <button><Link to="/home">Submit</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login