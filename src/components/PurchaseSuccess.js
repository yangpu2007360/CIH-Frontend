import React, { useEffect } from 'react'
import Navigationbar from './Navigationbar';
import axios from 'axios';

function PurchaseSuccess({ updateCurrUser, currUser }) {
    useEffect(() => {
        try {
            axios.post(`/update`, currUser).then(
                (response) => {
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
            <div class="confetti">
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
            </div>
            <div className='success-message'>
                <div>Thank you {currUser.name}!</div>
                <div>Your access has been extended to {currUser.showdate}.</div>
                <div>The invoice will be sent to you within 24 hours</div>
                <div>Enjoy your training!</div>
            </div>
        </div>
    )
}
export default PurchaseSuccess