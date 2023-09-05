import React, { useState } from 'react'
import axios from 'axios';
import logo from '../assets/logo.png'
import loading from "../assets/spinner.gif"
import { useNavigate } from 'react-router-dom';
import Navigationbar from './Navigationbar'

function Register({ handleSignIn, updateCurrUser, currUser, handleLogout }) {
    function setCookie(name, value, daysToExpire) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToExpire);
        const encodedValue = encodeURIComponent(JSON.stringify(value));
        const cookieValue = encodedValue + '; expires=' + expirationDate.toUTCString();
        document.cookie = name + '=' + cookieValue + '; path=/';
    }

    const [name, setName] = useState('');
    const [nameInputError, setNameInputError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailInputError, setEmailInputError] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordFormatError, setPasswordFormatError] = useState(false);
    const [registerMessage, setRegisterMessage] = useState("");
    const [isLoading, setisLoading] = useState(false);
    let navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const validePassword = (password) => {
        return password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)
    }
    const handleStart = () => {
        navigate('/allcategories')
    }
    const handleRegister = () => {
        if (!name) {
            setNameInputError(true)
            return
        } else {
            setNameInputError(false)
        }
        if (!validateEmail(email)) {
            setEmailInputError(true)
            return
        }
        else {
            setEmailInputError(false)
        }
        if (!password || !confirmPassword || password !== confirmPassword) {
            setPasswordMatchError(true)
            return
        } else {
            setPasswordMatchError(false)
        }
        if (!validePassword(password)) {
            setPasswordFormatError(true)
            return
        } else {
            setPasswordFormatError(false)
        }
        if (!nameInputError && !passwordMatchError && !emailInputError) {
            setisLoading(true)
            const newUser = { name, email, password }
            setCookie('registerinfo', newUser, 3)
            const currentURL = window.location.href;

            const loginIndex = currentURL.indexOf('/login');

            // Extract the part before "/login"
            const partBeforeLogin = currentURL.substring(0, loginIndex);

            try {
                axios.post("/", { newUser, partBeforeLogin }).then(
                    (response) => {
                        setisLoading(false)
                        if (response.data === 'Emailexist') {
                            setRegisterMessage('Sorry. This email alreay exist. Please login.')
                        }
                        else {
                            // updateCurrUser(response.data)
                            setRegisterMessage('An email will be sent to you shortly. Please click the link to validate your email.')
                        }
                    }
                )
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <div className='login-outer-container'>
                <div className='login-container'>
                    {isLoading &&
                        <img className='loading' src={loading} alt="sending" />
                    }
                    <img src={logo} alt='Industrial Safety Exam Prep' height='100px' />
                    <div className='log-in-subtitle'>Industrial Safety Training Hub</div>
                    <div><input placeholder='Enter Your Name' className={(nameInputError ? "input-error register-field" : "register-field")} value={name} onChange={(e) => { setName(e.target.value) }} /></div>
                    <div ><input placeholder='Enter Your Email' className={(emailInputError ? "input-error register-field" : "register-field")} value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                    <div><input placeholder='Enter Your Password' type="password" className={(passwordMatchError ? "input-error register-field" : "register-field")} value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                    <div><input placeholder='Confirm Your Password' type="password" className={(passwordMatchError ? "input-error register-field" : "register-field")} value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} /></div>
                    {nameInputError && <div className='invalid-message'>Please enter your name</div>}
                    {emailInputError && <div className='invalid-message'>Invalid Email Format</div>}
                    {passwordMatchError && <div className='invalid-message'>Passwords do not match</div>}
                    {passwordFormatError && <div className='invalid-message'>
                        <div className='password-criteria-container'>
                            <div>Please enter a password that meets the follow criteria:</div>
                            <div className='password-criteria'>
                                <div>- At least 6 characters</div>
                                <div>- At least one upper case letter</div>
                                <div>- At least one lower case letter</div>
                                <div>- At least one digit</div>
                            </div>
                        </div>
                    </div>}
                    <div className='sign-in-button' onClick={handleRegister}>Register Now</div>
                    {registerMessage === 'Great.You are successfully registered. Your access will expire in 3 days' ?
                        <div>
                            <div style={{ color: 'red' }} >{registerMessage}</div>
                            <div className='equation-sheet' onClick={handleStart}>Start training</div>
                        </div> :
                        <div style={{ color: 'red' }} >{registerMessage}</div>
                    }
                    {!registerMessage && <div className='have-account'>Have an account already?</div>}
                    {!registerMessage && <div className='register-button' onClick={handleSignIn}>Log in</div>}
                    {registerMessage === 'Sorry. This email alreay exist. Please login.' && <div className='register-button' onClick={handleSignIn}>Log in</div>}
                </div>
            </div>
        </div>
    )
}
export default Register