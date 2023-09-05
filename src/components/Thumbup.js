import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import thumbup from '../assets/thumbup.json'

function Thumbup() {
    const container = useRef(null)

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: thumbup
        });

        return () => instance.destroy();
    }, []);
    return (
        <div className='thumbup' ref={container}></div>
    )
}

export default Thumbup