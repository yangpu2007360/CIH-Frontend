import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import SignIn from './SignIn'
import Register from './Register';
function Login({ updateCurrUser, currUser, handleLogout }) {
    const [register, setRegister] = useState(false);
    const handleRegister = () => {
        setRegister(true)
    }
    const handleSignIn = () => {
        setRegister(false)
    }
    return (
        <>
            {/* <Navigationbar currUser={currUser} handleLogout={handleLogout} /> */}
            {register ? <Register handleSignIn={handleSignIn} updateCurrUser={updateCurrUser} currUser={currUser} handleLogout={handleLogout} /> : <SignIn handleRegister={handleRegister} updateCurrUser={updateCurrUser} currUser={currUser} />}
        </>
    )
}
export default Login