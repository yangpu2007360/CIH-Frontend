import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import SingleExam from './SingleExam'
import clock from '../assets/clock.png'
import thirty from '../assets/thirty.png'
import fortyfive from '../assets/fortyfive.png'
import sixty from '../assets/sixty.png'
import twohours from '../assets/twohours.png'
import fivehours from '../assets/fivehours.png'


function PracticeExam({ currUser, handleLogout }) {
    const [currChoice, setCurrChoice] = useState("")
    const handleExamClick = (time) => {
        setCurrChoice(time)
    }

    if (!currChoice) {
        return (
            <>
                <Navigationbar currUser={currUser} handleLogout={handleLogout} />
                <h1>CIH Practice Exam</h1>
                <div className='category-container'>
                    <div className='single-category exam-row' onClick={() => handleExamClick(30)}>Start a 30-Minute-Exam (18 questions)
                        <img src={thirty} alt='CIH Exam Practice Exam' height={'100px'} width={'100px'} />
                    </div>
                    <div className='single-category exam-row' onClick={() => handleExamClick(45)}>Start a 45-Minute-Exam (27 questions)
                        <img src={fortyfive} alt='CIH Exam Practice Exam' height={'100px'} width={'100px'} />
                    </div>
                    <div className='single-category exam-row' onClick={() => handleExamClick(60)}>Start a 60-Minute-Exam (36 questions)
                        <img src={sixty} alt='CIH Exam Practice Exam' height={'100px'} width={'100px'} />
                    </div>
                    <div className='single-category exam-row' onClick={() => handleExamClick(150)}>Start a 2.5-hour-Exam (90 questions)
                        <img src={twohours} alt='CIH Exam Practice Exam' height={'100px'} width={'100px'} />
                    </div>
                    <div className='single-category exam-row' onClick={() => handleExamClick(300)}>Start a 5-hour-Exam (180 questions)
                        <img src={fivehours} alt='CIH Exam Practice Exam' height={'100px'} width={'100px'} />
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Navigationbar currUser={currUser} handleLogout={handleLogout} />
                <SingleExam time={currChoice} />
            </>
        )
    }

}

export default PracticeExam