import React from 'react';

const ProgressBar = ({ percentage }) => {
    const progressStyle = {
        width: `${percentage}%`,
        height: '20px',
        backgroundColor: '#4caf50',
        transition: 'width 0.3s ease-in-out',
    };

    return (
        <div className="progress-bar">

            <div className="progress" style={progressStyle}></div>
            <div className='progress-text'>{(percentage).toFixed(0) + "%"}</div>
        </div>
    );
};

export default ProgressBar;