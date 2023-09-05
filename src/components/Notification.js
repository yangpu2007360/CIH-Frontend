import React from 'react'
import Navigationbar from './Navigationbar'
import { useNavigate } from 'react-router-dom';

function Notification({ currUser, handleLogout }) {
    let navigate = useNavigate();
    const clickeToLogIn = () => {
        navigate('/login')
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <div className='notification'>
                <div className='notification-words'>Please log in to view all the questions</div>
                <div onClick={clickeToLogIn} className='sign-in-button'>Log in</div>
            </div>
        </div>
    )
}
export default Notification