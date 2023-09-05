import React, { useState } from 'react'
import Navbarforallcate from './Navbarforallcate';
import axios from 'axios';
import Notification from './Notification';
import ExpireAccess from './ExpireAccess';
import star from '../assets/star.png'
import emptystar from '../assets/emptystar.png'
import Thumbup from './Thumbup';
import Pdf from './ABIH_Equation_Sheet.pdf';
import loading from "../assets/spinner.gif"

function Question({ currUser, handleLogout, questions, handleCategoryClick, updateCurrUser, selectedCategory, selectedCategoryAppearName }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const [currQuestion, setCurrQuestion] = useState(questions[0]);
    const [isLoading, setisLoading] = useState(false);
    const handleChoiceChange = (id) => {
        if (id === 'A') {
            document.getElementById("A").checked = true;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = false;
            setSelectedAnswer('A')
        }
        if (id === 'B') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = true;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = false;
            setSelectedAnswer('B')
        }
        if (id === 'C') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = true;
            document.getElementById("D").checked = false;
            setSelectedAnswer('C')
        }
        if (id === 'D') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = true;
            setSelectedAnswer('D')
        }
    }
    const handleSubmit = (index) => {
        if (!selectedAnswer) {
            return
        }
        if (selectedAnswer === 'A') {
            setSubmittedAnswer('A')
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'B') {
            setSubmittedAnswer('B')
            document.getElementById("A").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'C') {
            setSubmittedAnswer('C')
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'D') {
            setSubmittedAnswer('D')
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
        }
        document.getElementById("submit").style.display = 'none'

        if (selectedAnswer === currQuestion.answer) {

            if (currUser.solved_question[0][selectedCategory].includes(index)) {
                console.log('No need to update');
                return
            }

            setisLoading(true)
            try {
                axios.post(`/solvedquestion`, { currUser, index, selectedCategory }).then(
                    (response) => {
                        updateCurrUser(response.data)
                        setisLoading(false)
                    }
                )
            }
            catch (error) {
                console.log(error)
                setisLoading(false)
            }
        }
    }
    const reSet = () => {
        setSelectedAnswer(null)
        setSubmittedAnswer(null)
        document.getElementById("A").checked = false;
        document.getElementById("B").checked = false;
        document.getElementById("C").checked = false;
        document.getElementById("D").checked = false;
        document.getElementById("A").disabled = false;
        document.getElementById("B").disabled = false;;
        document.getElementById("C").disabled = false;;
        document.getElementById("D").disabled = false;;
        document.getElementById("submit").style.display = 'block'
    }
    const handleNext = (index) => {
        setCurrQuestion(questions[index % questions.length])
        reSet()
    }
    const handlePrev = (index) => {
        let newIndex
        if (index - 2 > -1) {
            newIndex = index - 2
        } else {
            newIndex = 0
        }
        setCurrQuestion(questions[newIndex % questions.length])
        reSet()
    }
    const handleMark = (index) => {
        setisLoading(true)
        try {
            axios.post(`/markquestions`, { currUser, index, selectedCategory }).then(
                (response) => {
                    setisLoading(false)
                    updateCurrUser(response.data)
                }
            )
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleBack = () => {
        handleCategoryClick(null)
    }
    const validAccess = (expire_date) => {
        let currDate = new Date();
        let date2 = new Date(expire_date);
        if (date2 >= currDate) {
            return true
        } else {
            return false
        }
    }
    if (!currUser) {
        return (
            <>
                <Notification currUser={currUser} handleLogout={handleLogout} />
            </>
        )
    }
    if (!validAccess(currUser.expire_date)) {
        return (
            <>
                <ExpireAccess currUser={currUser} handleLogout={handleLogout} />
            </>
        )
    }
    const existInMarkedList = currUser.marked_question[0][selectedCategory].includes(currQuestion.number)
    const existInSolvedList = currUser.solved_question[0][selectedCategory].includes(currQuestion.number)

    return (
        <>
            <Navbarforallcate currUser={currUser} handleLogout={handleLogout} handleBack={handleBack} />
            <div className='question-card'>
                <div className='back_to_all' onClick={handleBack}> ← All Categories</div>
                <div className='tooltip'>
                    <div><div className={existInSolvedList && 'greentext'}>Question #{currQuestion.number} of {questions.length} in {selectedCategoryAppearName}</div>{existInSolvedList && <span class="tooltiptextq">Solved Previously</span>}</div>
                    {/* {existInSolvedList && } */}

                </div>
                <div className='question-description'>
                    <div>{currQuestion.description}</div>
                    <div className='choices'>
                        {currQuestion.choices.map((choice) =>
                            <div className='single-choice' key={choice}>
                                <input type="radio" id={choice[0]} onChange={() => { handleChoiceChange(choice[0]) }} />
                                <label className='choice-label' htmlFor="choice1">{choice}</label>
                            </div>)}
                    </div>
                    <div className='submit' onClick={() => handleSubmit(currQuestion.number)} id='submit'>Submit</div>

                    {submittedAnswer != null && submittedAnswer === currQuestion.answer &&
                        <div className='explain'>
                            <div className='result'>
                                <div>Correct!</div><Thumbup />
                            </div>
                            <div>{currQuestion.explain}</div>
                        </div>
                    }
                    {submittedAnswer != null && submittedAnswer !== currQuestion.answer &&
                        <div className='explain'>
                            <h3 className='result'>
                                Wrong Answer
                            </h3>
                            <div>{currQuestion.explain}</div>
                        </div>
                    }
                    {existInMarkedList ? <div className="mark-question"><div className='mark-word'>Marked</div><img className='already-mark-icon' src={star} alt='already in' /></div> : <div className="mark-question" onClick={() => handleMark(currQuestion.number)}><div className='mark-word'>Mark This Question</div><img className='mark-icon' src={emptystar} alt='add to list' /></div>}
                    <div className="next-question" onClick={() => handleNext(currQuestion.number)}>NEXT →</div>
                    <a className='equation-sheet' href={Pdf} target="_blank">Equation Sheet</a>
                    <div className="previous-question" onClick={() => handlePrev(currQuestion.number)}>PREV ←</div>
                </div>
            </div>
            {isLoading &&
                <img className='loading' src={loading} alt="sending" />
            }
        </>
    )
}
export default Question