import React, { useState, useEffect } from 'react'

export default function IntroVideo() {

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div className='video-container'>

            {width > 480 && <h1>Introduction to Industrial Safety Training Hub</h1>}
            <h3>We take the stress out of your CIH exam preparation</h3>
            {width > 920 && <iframe width="920" height="515"
                src="https://www.youtube.com/embed/zs9o_j0pTnQ">
            </iframe>}
            {width <= 920 && <iframe width="360" height="315"
                src="https://www.youtube.com/embed/zs9o_j0pTnQ">
            </iframe>}
        </div >
    )
}
