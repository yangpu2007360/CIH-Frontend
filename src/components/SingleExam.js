import React, { useState, useEffect } from 'react'
import Question from './Question'
import { air_sampling_questions } from "../questions/air_sampling_questions"
import { allQuestions } from "../questions/QuestionDatabase"
import Pdf from './ABIH_Equation_Sheet.pdf';
import Thumbup from './Thumbup'
import CountdownTimer from './CountdownTimer';

function SingleExam({ time }) {
    const getRandomQuestions = () => {
        const categories = Object.keys(allQuestions);
        var numQuestionsPerCategory = 2;
        if (time == 30) {
            var numQuestionsPerCategory = 1
        }
        const totalQuestions = time * 0.6;
        const randomQuestions = [];
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const categoryQuestions = allQuestions[category];

            for (let j = 0; j < numQuestionsPerCategory; j++) {
                const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
                const { number, description, ...additionalFields } = categoryQuestions[randomIndex];
                const question = {
                    category: category,
                    number: number,
                    description: description,
                    ...additionalFields,
                    // Add other fields from the existing object
                };
                randomQuestions.push(question);
                categoryQuestions.splice(randomIndex, 1);
            }
        }
        const remainingQuestions = totalQuestions - randomQuestions.length;
        const remainingCategories = categories.filter(
            (category) => allQuestions[category].length > 0
        );
        for (let i = 0; i < remainingQuestions; i++) {
            const randomCategoryIndex = Math.floor(
                Math.random() * remainingCategories.length
            );
            const randomCategory = remainingCategories[randomCategoryIndex];
            const categoryQuestions = allQuestions[randomCategory];
            const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
            const { number, description, ...additionalFields } = categoryQuestions[randomIndex];
            const question = {
                category: randomCategory,
                number: number,
                description: description,
                ...additionalFields,
                // Add other fields from the existing object
            };
            randomQuestions.push(question);
            categoryQuestions.splice(randomIndex, 1);

            if (categoryQuestions.length === 0) {
                remainingCategories.splice(randomCategoryIndex, 1);
            }
        }

        return randomQuestions;
    };

    // const getRandomQuestions = () => {
    //     const categories = Object.keys(allQuestions);
    //     const numQuestionsPerCategory = 2;
    //     const totalQuestions = time * 0.6;
    //     const randomQuestions = [];

    //     for (let i = 0; i < categories.length; i++) {
    //         const category = categories[i];
    //         const categoryQuestions = allQuestions[category];

    //         for (let j = 0; j < numQuestionsPerCategory; j++) {
    //             const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    //             const question = categoryQuestions[randomIndex];
    //             randomQuestions.push(question);
    //             categoryQuestions.splice(randomIndex, 1);
    //         }
    //     }

    //     const remainingQuestions = totalQuestions - randomQuestions.length;
    //     const remainingCategories = categories.filter(
    //         (category) => allQuestions[category].length > 0
    //     );

    //     for (let i = 0; i < remainingQuestions; i++) {
    //         const randomCategoryIndex = Math.floor(
    //             Math.random() * remainingCategories.length
    //         );
    //         const randomCategory = remainingCategories[randomCategoryIndex];
    //         const categoryQuestions = allQuestions[randomCategory];
    //         const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    //         const question = categoryQuestions[randomIndex];
    //         randomQuestions.push(question);
    //         categoryQuestions.splice(randomIndex, 1);

    //         if (categoryQuestions.length === 0) {
    //             remainingCategories.splice(randomCategoryIndex, 1);
    //         }
    //     }

    //     return randomQuestions;
    // }

    const countCategoryOccurrences = (list) => {
        const categoryCount = {};

        for (let i = 0; i < list.length; i++) {
            const category = list[i].category;
            if (categoryCount[category]) {
                categoryCount[category] += 1;
            } else {
                categoryCount[category] = 1;
            }
        }
        return categoryCount;
    };

    const updateCategoryCount = (categoryCountList, category) => {
        const updatedList = { ...categoryCountList };
        if (updatedList.hasOwnProperty(category)) {
            updatedList[category] += 1;
        }
        return updatedList;
    };
    const newquestions = getRandomQuestions
    const [questions, setQuestions] = useState(newquestions);
    const category_count = countCategoryOccurrences(questions)
    const [currQuestion, setCurrQuestion] = useState(questions[0]);
    const [currIndex, setCurrIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const calculatePercentage = (value, total) => {
        return ((value / total) * 100).toFixed(2); // Adjust the decimal places as needed
    };
    const categories = Object.keys(category_count);
    const [results, setResults] = useState({
        Air_Sampling: 0,
        Analytical_Chemistry: 0,
        Basic_Science: 0,
        Biohazards: 0,
        Biostats_Epi: 0,
        Engineering_Control: 0,
        Ergonomics: 0,
        Noise: 0,
        Non_Engineering: 0,
        Radiation: 0,
        Thermal_Stressors: 0,
        Toxicology: 0,
        Work_Environment: 0,
    })
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
            setResults(updateCategoryCount(results, currQuestion.category))
        }
        if (currIndex + 1 === time * 0.6) {
            console.log("completed")
            setShowResult(true)
        }
        setSubmitClicked(true)
        setShowMessage(false)
    }
    const reSet = () => {
        setSelectedAnswer(null)
        setSubmittedAnswer(null)
        setSubmitClicked(false)
        setShowMessage(false)
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
    const handleNext = () => {
        if (submitClicked) {
            setCurrIndex(currIndex + 1)
            setCurrQuestion(questions[currIndex + 1 % questions.length])
            reSet()
        }
        else {
            setShowMessage(true)
        }
    }
    function calculateTotalCorrectAnswers(results) {
        let totalCorrectAnswers = 0;
        Object.values(results).forEach((value) => {
            totalCorrectAnswers += value;
        });
        return totalCorrectAnswers;
    }
    function calculateTotalPercentage(results, category_count) {
        const totalCorrectAnswers = calculateTotalCorrectAnswers(results);
        const totalQuestions = time * 0.6;
        return ((totalCorrectAnswers / totalQuestions) * 100).toFixed(2);
    }
    return (
        <div>
            <h2>{time}-minute-Exam</h2>
            {!showResult ?
                <>
                    <CountdownTimer duration={time} results={results} category_count={category_count} time={time} /> {/* Countdown for 30 minutes */}
                    <div className='question-card'>
                        <div><div>Question {currIndex + 1} of  {questions.length}</div></div>
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
                            {showMessage && <div className='please-submit'>Please submit before move on </div>}

                            {submittedAnswer != null && submittedAnswer === currQuestion.answer &&
                                <div className='explain'>
                                    <div className='result'>
                                        <Thumbup />
                                    </div>

                                </div>
                            }
                            {submittedAnswer != null && submittedAnswer !== currQuestion.answer &&
                                <div className='explain'>
                                    <h3 className='result'>
                                        Wrong!
                                    </h3>
                                </div>
                            }
                            <div className="next-question" onClick={() => handleNext()}>NEXT →</div>
                            <a className='equation-sheet' href={Pdf} target="_blank">Equation Sheet</a>
                        </div>
                    </div> </> :
                <h4>
                    <div>Completed! Here is your result:</div>
                    <div className='complete-result'>
                        Total Number of Correct Answers: {calculateTotalCorrectAnswers(results)}
                        <br />
                        Percentage: {calculateTotalPercentage(results, category_count)}%
                    </div>
                    <div>{calculateTotalPercentage(results, category_count) > 70 ? <div>Pass! You beat 70%</div> : <div>Fail! You need to achieve at least 70%</div>}</div>
                    <div className='result-table'>
                        <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black", padding: "5px" }}>Category</th>
                                    <th style={{ border: "1px solid black", padding: "5px" }}>Number of Correct Answers/Total number</th>
                                    <th style={{ border: "1px solid black", padding: "5px" }}>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category}>
                                        <td style={{ border: "1px solid black", padding: "5px" }}>{category}</td>
                                        <td style={{ border: "1px solid black", padding: "5px", 'text-align': 'center' }}>{results[category]} / {category_count[category]}</td>
                                        <td style={{ border: "1px solid black", padding: "5px" }}>
                                            {calculatePercentage(results[category], category_count[category])}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </h4>}

        </div>

    )
}

export default SingleExam