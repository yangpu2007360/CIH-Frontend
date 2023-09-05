import React from 'react'
import Navigationbar from './Navigationbar';
import getStripe from '../lib/getStrip';

export default function ExpireAccess({ currUser, handleLogout }) {
    async function handleCheckout() {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: `price_1NDM3DFt8mEmrzFE7NVBqIni`,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            successUrl: `https://www.industrialsafetyhub.com/purchasesuccess`,
            cancelUrl: `https://www.industrialsafetyhub.com//cancel`,
            // successUrl: `http://localhost:3001/purchasesuccess`,
            // cancelUrl: `http://localhost:30001/cancel`,
            customerEmail: currUser.email,
        });
        console.warn(error.message);
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <div className='notification'>
                <div className='notification-words'>Your access has expired on {currUser.expire_date}</div>
                <div onClick={handleCheckout} className='sign-in-button'>Purchase</div>
            </div>
        </div>
    )
}
