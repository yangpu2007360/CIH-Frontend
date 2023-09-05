import React, { useState, useEffect } from 'react'
import { allQuestions } from '../questions/QuestionDatabase'
import Thumbup from './Thumbup';
import Pdf from './ABIH_Equation_Sheet.pdf';

function QuestionInMarkedPage({ question_k_v, handleNext, handlePrev }) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    var result = allQuestions[question_k_v.key].filter(obj => {
        return obj.number === question_k_v.index
    })
    const [currQuestion, setCurrQuestion] = useState(result[0]);
    useEffect(() => {
        setCurrQuestion(result[0])
    }, [result])
    useEffect(() => {
        setSelectedAnswer(null)
        setSubmittedAnswer(null)
        document.getElementById("submit").style.display = 'block'
    }, [currQuestion])
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
    const handleSubmit = () => {
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
    }
    return (
        <>
            <div className={width > 480 ? 'question-card-marked' : 'question-card'}>
                {width > 480 && <div>Question{currQuestion.number}</div>}
                <div className='question-description'>
                    <div>{currQuestion.description}</div>
                    <div className='choices'>
                        {currQuestion.choices.map((choice) =>
                            <div className='single-choice' key={choice}>
                                <input type="radio" id={choice[0]} onChange={() => { handleChoiceChange(choice[0]) }} />
                                <label className='choice-label' htmlFor="choice1">{choice}</label>
                            </div>)}
                    </div>
                    <div className='submit' onClick={handleSubmit} id='submit'>Submit</div>
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
                            <h3 className='result'>Wrong Answer</h3>
                            <div>{currQuestion.explain}</div>
                        </div>
                    }
                    <div className="next-question" onClick={() => handleNext(currQuestion.number)}>NEXT →</div>
                    <a className='equation-sheet' href={Pdf} target="_blank">Equation Sheet</a>
                    <div className="previous-question" onClick={() => handlePrev(currQuestion.number)}>PREV ←</div>
                </div>
            </div>
        </>
    )
}
export default QuestionInMarkedPage