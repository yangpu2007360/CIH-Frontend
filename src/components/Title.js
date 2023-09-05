import React, { useState, useEffect } from 'react'
import CIH_Exam_Online_Prep from '../assets/CIH_Exam_Online_Prep.png'
import getStripe from '../lib/getStrip';
function Title({ currUser }) {
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
            cancelUrl: `https://www.industrialsafetyhub.com/cancel`,
            // successUrl: `http://localhost:3001/purchasesuccess`,
            // cancelUrl: `http://localhost:30001/cancel`,
            customerEmail: currUser.email,
        });
        console.warn(error.message);
    }
    const handlePurchase = () => {
        console.log("current user is ", currUser)
        if (!currUser) {
            window.location.href = '/login'
        } else {
            console.log("will direct to purchase page directly")
            handleCheckout()
        }
    }
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 842;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (
        <div className='title'>
            <img src={CIH_Exam_Online_Prep} alt='CIH Exam Prep with lots of sample questions' className='landing-image' />
            <h1 className='title-name'>Prepare CIH Exam With High Quality Questions</h1>
            <div className='firstcomponent-container'>
                {width > breakpoint && <div className='three-features'>
                    <h2>Self-paced training for CIH Exam with 800+ practice/sample questions that cover everything you need</h2>
                    <h2>Our program is designed to provide you with the up-to-date practice questions and information for the CIH exam</h2>
                    <h2>Pass The Certified Industrial Hygienist (CIH) Exam In 90 days</h2>
                    <div />
                </div>}
                <div className='register-price'>
                    <div>Register today to start free (3-day-access)</div>
                    <div>$299 for 1-year-access </div>
                    <div className='purchase-button' onClick={handlePurchase}>{currUser ? 'Purchase Training' : "Log in to purchase"}</div>
                </div>
            </div>
        </div>
    )
}
export default Title