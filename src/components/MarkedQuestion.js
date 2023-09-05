import React, { useState, useEffect } from 'react'
import Navigationbar from './Navigationbar'
import removeIcon from '../assets/removeIcon.png'
import axios from 'axios'
import QuestionInMarkedPage from './QuestionInMarkedPage'
import loading from "../assets/spinner.gif"
import ExpireAccess from './ExpireAccess'

function MarkedQuestion({ currUser, handleLogout, updateCurrUser }) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    const [isLoading, setisLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [index_marked_question, setIndex_marked_question] = useState(0)
    const marked_question_obj = currUser.marked_question[0]
    const all_marked_questions_init = []
    const all_categories = [{ appearname: "Air Sampling & Instrumentation", databasename: "Air_Sampling" }, { appearname: "Analytical Chemistry", databasename: "Analytical_Chemistry" }, { appearname: "Basic Science", databasename: "Basic_Science" }, { appearname: "Biohazards", databasename: "Biohazards" }, { appearname: "Biostatistics & Epidemiology", databasename: "Biostats_Epi" }, { appearname: "Community Exposure", databasename: 'Community_Exposure' }, { appearname: "Engieering Controls/Ventilation", databasename: "Engineering_Control" }, { appearname: "Ergonomics", databasename: "Ergonomics" }, { appearname: "Health Risk Analysis", databasename: "Health_Risk" }, { appearname: "IH Program Management", databasename: "Management" }, { appearname: "Noise", databasename: "Noise" }, { appearname: "Non-Engineering Controls", databasename: "Non_Engineering" }, { appearname: "Radiation", databasename: "Radiation" }, { appearname: "Thermal Stressors", databasename: "Thermal_Stressors" }, { appearname: "Toxicology", databasename: "Toxicology" }, { appearname: "Work Environment", databasename: "Work_Environment" }]
    for (const key in marked_question_obj) {
        const question_list = marked_question_obj[key]
        question_list.forEach((index) => {
            all_marked_questions_init.push({ key, index })
        });
    }
    const [selectedQuestions, setSelectedQuestions] = useState(all_marked_questions_init)
    const selectedQuestionsArray = Object.entries(selectedQuestions)
    const [all_marked_questions, setAll_marked_questions] = useState(all_marked_questions_init)
    const selectCategory = (name) => {
        const filtered_question = all_marked_questions.filter(question => question.key === name)
        setSelectedQuestions(filtered_question)
        setSelectedCategory(name)
        setIndex_marked_question(0)
    }
    const showAllQuestions = () => {
        setSelectedQuestions(all_marked_questions)
        setSelectedCategory(null)
    }
    const handleNext = () => {
        setIndex_marked_question((index_marked_question + 1) % selectedQuestionsArray.length)
    }
    const handlePrev = () => {
        let newIndex
        if (index_marked_question - 1 < 0) {
            newIndex = 0
        }
        else {
            newIndex = index_marked_question - 1
        }
        setIndex_marked_question(newIndex % selectedQuestionsArray.length)
    }
    const removeQuestion = (index, question_category) => {
        setisLoading(true)
        try {
            axios.post(`/removequestion`, { currUser, index, question_category }).then(
                (response) => {
                    setisLoading(false)
                    updateCurrUser(response.data)
                    let updatedSelectedQuestions = []
                    let updatedQuestionsAllCate = []
                    selectedQuestions.forEach((item) => {
                        if (item.key === question_category && item.index === index) {
                        } else {
                            updatedSelectedQuestions.push(item)
                        }
                    });
                    all_marked_questions.forEach((item) => {
                        if (item.key === question_category && item.index === index) {
                        } else {
                            updatedQuestionsAllCate.push(item)
                        }
                    });
                    document.getElementById(question_category + index).classList.add('myelement')
                    setTimeout(function () {
                        setAll_marked_questions(updatedQuestionsAllCate)
                        setSelectedQuestions(updatedSelectedQuestions)
                        if (index === selectedQuestionsArray[index_marked_question][1].index && question_category === selectedQuestionsArray[index_marked_question][1].key) {
                            setIndex_marked_question(0)
                        }

                    }, 1000);
                }
            )
        }
        catch (error) {
            console.log(error)
            return
        }
    }
    const showSelectedQuestion = (selectedkey, selectedindex) => {
        selectedQuestionsArray.forEach((obj, index) => {
            if (obj[1].key === selectedkey && obj[1].index === selectedindex) {
                setIndex_marked_question(index)
            }
        });
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
    if (!validAccess(currUser.expire_date)) {
        return (
            <>
                <ExpireAccess currUser={currUser} handleLogout={handleLogout} />
            </>
        )
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <h1>Revisiting Marked Questions for CIH Exam Triumph</h1>
            {width > 480 && <div className='marked_question_category'>
                <div onClick={showAllQuestions} className={(!selectedCategory ? "selected-background" : 'category-marked')} >All marked questions</div>
                {all_categories.map((category) => (
                    <div key={category.appearname} className={(category.databasename === selectedCategory ? "selected-background" : 'category-marked')} onClick={() => { selectCategory(category.databasename) }}>{category.appearname}</div>
                ))}
            </div>}

            <div className='marked_questions_container'>
                {width > 480 &&
                    <div className='all_marked_questions'>
                        {selectedCategory ? <div className='selected-category-bar' >{selectedCategory}</div> : <div className='selected-category-bar'>All marked questions</div>}
                        {
                            selectedQuestions.map((question) => (
                                <div key={question.key + question.index} className='signle-selected-question'>
                                    <div className={(question === selectedQuestionsArray[index_marked_question][1] ? "grey-background" : undefined)} onClick={() => { showSelectedQuestion(question.key, question.index) }} id={question.key + question.index} key={question.key + question.index}>{question.key}{question.index} </div>
                                    <img src={removeIcon} alt="remove" height="14px" key={'remove' + question.key + question.index} onClick={() => removeQuestion(question.index, question.key)} />
                                </div>
                            ))
                        }
                    </div>}
                {selectedQuestionsArray.length > 0 ? <QuestionInMarkedPage question_k_v={selectedQuestionsArray[index_marked_question][1]} handleNext={handleNext} handlePrev={handlePrev} /> : <div className='question-card-marked'>No question marked in this category</div>}
            </div>
            {isLoading &&
                <img className='loading' src={loading} alt="sending" />
            }
        </div >
    )
}
export default MarkedQuestion