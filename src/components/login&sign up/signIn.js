import React, { useEffect } from 'react'
import { useState } from 'react'
import './signin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function SignIn() {

    const [error, setError] = useState({
        nameErr: '',
        emailErr: '',
        phoneErr: '',
        passwordErr: '',
        re_passwordErr: ''
    })
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        re_password: '',
    })
const [existUser,setExistUser] = useState([
    {
        name: 'jagan',
        email: 'email',
        phone: '9080565928',
        password: 'jagan',
        re_password: 'jagan'
    }
])
    function checkHandeler(e) {


        let obj = {}
        obj[e.target.name] = e.target.value
        setForm({ ...form, ...obj })
        
        let obj_1 = {}

        for (let key in form) {

            if (form[key].trim().length === 0) {

                obj_1[key + "Err"] = "Mandatory"

            }
            else if (key === "email") {

                let mail = /^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([a-zA-Z]{3})$/

                if (mail.test(form[key])) {

                    obj_1[key + "Err"] = ""

                }
                else {

                    obj_1[key + "Err"] = "invalid email"

                }

            }
            else if (key === "password") {

                let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{8,100}$/

                if (pass.test(form[key])) {

                    obj_1[key + "Err"] = ""

                }
                else {

                    obj_1[key + "Err"] = "Weak password"

                }

            }
            else if (key === "phone") {

                if (form[key].trim().length === 10) {
                    
                    obj_1[key + "Err"] = ""

                }
                else {

                    obj_1[key + "Err"] = "Invalid phone number"

                }

            }
            else if (key === "re_password") {

                if (form[key].trim() == form["password"]) {
                    
                    obj_1[key + "Err"] = ""

                }
                else {

                    obj_1[key + "Err"] = "password not match"

                }

            }
            else {

                obj_1[key + "Err"] = ""

            }
        }
        setError(obj_1)
    }
 useEffect(()=>{
    existUser.push(form)
 }
 ,[form])
console.log(existUser);
console.log(form);
    return (
        <>
            <div className='sign-up-bg'>
                <div className='sign-up'>
                    <h1>Sign up</h1>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        onChange={checkHandeler}
                    /><br></br>
                    <small>{error.nameErr}</small>
                    <input
                        type='email'
                        name='email'
                        placeholder='your@email.com'
                        onChange={checkHandeler}
                    /><br></br>
                    <small>{error.emailErr}</small>
                    <input
                        type='number'
                        name='phone'
                        placeholder='+91'
                        onChange={checkHandeler}
                    /><br></br>
                    <small>{error.phoneErr}</small>
                    <input
                        type='password'
                        name='password'
                        placeholder='Pa$WoRd'
                        onChange={checkHandeler}
                    /><br></br>
                    <small>{error.passwordErr}</small>
                    <input
                        type='password'
                        name='re_password'
                        placeholder='RE-Pa$WoRd'
                        onChange={checkHandeler}
                    /><br></br>
                    <small>{error.re_passwordErr}</small>
                    <button
                    disabled={!error.nameErr && !error.emailErr && !error.passwordErr && !error.re_passwordErr && !error.phoneErr ? true : false}
                    ><Link to='/'>Submit</Link></button>
                </div>
            </div>
        </>
    )
}

export default SignIn