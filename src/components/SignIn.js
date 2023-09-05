import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import loading from "../assets/spinner.gif"
import Navigationbar from './Navigationbar'

function SignIn({ handleRegister, updateCurrUser, currUser, handleLogout }) {
    const [email, setEmail] = useState('');
    const [emailforpassword, setEmailforpassword] = useState('');
    const [password, setPassword] = useState('');
    const [forgetPassword, setforgetPassword] = useState(false);
    const [sendPasswordMessage, setSendPasswordMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordEntryError, setPasswordEntryError] = useState(false);
    const [signinMessage, setSigninMessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    let navigate = useNavigate();


    const handleSingIn = () => {
        if (!validateEmail(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (!password) {
            setPasswordEntryError(true)
        } else {
            setPasswordEntryError(false)
        }
        if (password && validateEmail(email)) {
            setisLoading(true)
            const newRequest = { email, password }
            try {
                axios.post("/singleuser", newRequest).then(
                    (response) => {
                        setisLoading(false)
                        if (response.data === 'Nouser') {
                            setSigninMessage("User does not exist. Please register.")
                            return
                        }
                        if (response.data === 'wronginfo') {
                            setSigninMessage("Email and password does not match.")
                            return
                        }
                        else {
                            setSigninMessage("Great! You are logged in now")
                            updateCurrUser(response.data)
                            navigate('/');
                        }
                    }
                )
                // ues this when in production
                // axios.post("http://localhost:3000/singleuser", newRequest).then(
                //     (response) => {
                //         if (response.data === 'Nouser') {
                //             setSigninMessage("User does not exist. Please register.")
                //             return
                //         }
                //         if (response.data === 'wronginfo') {
                //             setSigninMessage("Email and password does not match.")
                //             return
                //         }
                //         else {
                //             updateCurrUser(response.data)
                //             navigate('/');
                //         }
                //     }
                // )
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    const handleSendPassword = () => {
        if (validateEmail(emailforpassword)) {
            setisLoading(true)
            try {
                axios.post("/sendpassword", { email: emailforpassword }).then(
                    (response) => {
                        setisLoading(false)
                        if (response.data === 'Nouser') {
                            setSendPasswordMessage('The email does not exist. Please register!')
                        }
                        if (response.data === 'email sent') {
                            setSendPasswordMessage('We just sent you the password. Please check your email')
                        }
                    }
                )
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            setSendPasswordMessage('Please enter a valid email')
        }
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <div className='login-outer-container'>
                <div className="login-container">
                    <img src={logo} alt='Industrial Safety Exam Prep' height='100px' />
                    <div className='log-in-subtitle'>Industrial Safety Training Hub</div>
                    {!forgetPassword && <>
                        <div className='enter-email'><input className={(emailError ? "input-error" : undefined)} placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                        <div><input className={(passwordEntryError ? "input-error" : undefined)} type="password" placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                        {emailError && <div className='invalid-message'>Invalid Email Format</div>}
                        {passwordEntryError && <div className='invalid-message'>Please enter password</div>}
                        <div className='sign-in-button' onClick={handleSingIn}>Sign In</div>
                    </>
                    }

                    <div className='forget-password' onClick={() => { setforgetPassword(true) }}><div className='forget-password-words'>Forget password?</div>
                        {forgetPassword &&
                            <div className='forget-password'>
                                <div className='forget-password-hint'>Enter your email and we will email you the password</div>
                                <input placeholder='Enter Your Email' value={emailforpassword} onChange={(e) => { setEmailforpassword(e.target.value) }} />
                                <div className='sign-in-button' onClick={handleSendPassword}>Send password</div>
                                <div>{sendPasswordMessage}</div>
                            </div>
                        }
                    </div>
                    {signinMessage && <div style={{ color: 'red' }}>{signinMessage}</div>}
                    <div className='register-button' onClick={handleRegister}>Register Now</div>
                    {isLoading &&
                        <img className='loading' src={loading} alt="sending" />
                    }
                </div>
            </div>
        </div>
    )
}
export default SignIn