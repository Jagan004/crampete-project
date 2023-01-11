import { Button } from 'bootstrap'
import React from 'react'
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from 'react-router-dom'
import './login.css'
function Login() {
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    
    const value = JSON.parse(sessionStorage.getItem("existingUser"))


const checkHandeler = (e) =>{
let obj = {}
obj[e.target.name] = e.target.value
setForm({...form,...obj})


}

const history = useHistory()

function checkValidation()
{
    value.map((val)=>{
        if(val.email == form.email && val.password == form.password)
        {
            setError('')
            history.push("/home")
            
        }
        else
        {
            setError("Email or Password not found")
        }
    })
    }



    return (
        <>
            <div className='align'>
                <div className='login'>
                    <h1>Login</h1>
                    <input type='email' name="email" placeholder='Enter Your Email' onChange={checkHandeler} /><br></br>
                    <input type='password' name="password" placeholder='Enter Your Password' onChange={checkHandeler}/><br></br>
                    <small>{error}</small>
                    <div className='login-btn'>
                        <p>don't have account <span><Link to="/signin">sign up</Link></span></p>
                        <button onClick={checkValidation}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login