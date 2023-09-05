import React, { useEffect, useState } from 'react'
import Navigationbar from './Navigationbar';
import axios from 'axios';

function RegisterSuccess({ updateCurrUser }) {
    const [currUser, setCurrUser] = useState('')
    function getCookie(name) {
        if (document.cookie) {
            const cookies = document.cookie.split('; ');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].split('=');
                if (cookie[0] === name) {
                    const encodedValue = cookie[1];
                    const decodedValue = decodeURIComponent(encodedValue);
                    return JSON.parse(decodedValue);
                }
            }
        }

        return null;
    }

    useEffect(() => {
        const registerinfo = getCookie('registerinfo')

        try {
            axios.post(`/register`, registerinfo).then(
                (response) => {
                    setCurrUser(response.data)
                    updateCurrUser(response.data)
                }
            )
        }
        catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div>
            <Navigationbar currUser={currUser} />
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>
            <div className='success-message'>
                <div>Thank you! {currUser.name}</div>
                <div>You have successfully registered for our service</div>
                <div>Enjoy your training!</div>
                <div>Your access will expire on {currUser.expire_date}</div>
            </div>
        </div>
    )
}

export default RegisterSuccess