import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

function Footnote() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (
        <div className='footnote'>
            <div><img className='footnote-logo' src={logo} alt="Industrial Safety Training Hub" /></div>
            <div>
                <div>Phone: 510-701-9463</div>
                <div>Email: yangpu2007360@gmail.com</div>
            </div>
            {width > 480 && <div>Our mission is to take the stress out of your exam preparation.</div>}
            {width > 480 && <div>©Copyright 2023 - 2033 Industrial Safety Training Hub</div>}
        </div>
    )
}
export default Footnote