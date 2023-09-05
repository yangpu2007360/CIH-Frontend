import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import airsamplingicon from '../assets/CIH_Exam_Questions_Air_Sampling.png'
import chemistry from '../assets/CIH_Exam_Questions_Chemistry.png'
import science from '../assets/CIH_Exam_Questions_Science.png'
import biohazard from '../assets/CIH_Exam_Questions_Biohazard.png'
import epi from '../assets/CIH_Exam_Questions_Epidemiology.png'
import engineering from '../assets/CIH_Exam_Questions_Engineering.png'
import ergo from '../assets/CIH_Exam_Questions_Ergonomics.png'
import management from '../assets/CIH_Exam_Questions_Management.png'
import noise from '../assets/CIH_Exam_Questions_Noise.png'
import radiation from '../assets/CIH_Exam_Questions_Radiation.png'
import heat from '../assets/CIH_Exam_Questions_Thermal_Stressor.png'
import poison from '../assets/CIH_Exam_Questions_Toxicology.png'
import manufactor from '../assets/CIH_Exam_Questions_Work_Environment.png'
import { allQuestions } from '../questions/QuestionDatabase'
import Question from './Question'
import ProgressBar from './ProgressBar'

function AllCategories({ currUser, handleLogout, updateCurrUser }) {
    const [showQuestions, setShowQuestions] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCategoryAppearName, setSelectedCategoryAppearName] = useState(null)
    const [allcategories, setAllcategories] = useState([
        { database_name: "Air_Sampling", name: 'Air Sampling & Instrumentation', image: airsamplingicon, questions: allQuestions.Air_Sampling },
        { database_name: "Analytical_Chemistry", name: 'Analytical Chemistry', image: chemistry, questions: allQuestions.Analytical_Chemistry },
        { database_name: "Basic_Science", name: 'Basic Science', image: science, questions: allQuestions.Basic_Science },
        { database_name: "Biohazards", name: 'Biohazards', image: biohazard, questions: allQuestions.Biohazards },
        { database_name: "Biostats_Epi", name: 'Biostatistics & Epidemiology', image: epi, questions: allQuestions.Biostats_Epi },
        { database_name: "Engineering_Control", name: 'Engineering Controls/Ventilation', image: engineering, questions: allQuestions.Engineering_Control },
        { database_name: "Ergonomics", name: 'Ergonomics', image: ergo, questions: allQuestions.Ergonomics },
        { database_name: "Noise", name: 'Noise', image: noise, questions: allQuestions.Noise },
        { database_name: "Non_Engineering", name: 'Non-Engineering Controls', image: management, questions: allQuestions.Non_Engineering },
        { database_name: "Radiation", name: 'Radiation', image: radiation, questions: allQuestions.Radiation },
        { database_name: "Thermal_Stressors", name: 'Thermal Stressors', image: heat, questions: allQuestions.Thermal_Stressors },
        { database_name: "Toxicology", name: 'Toxicology', image: poison, questions: allQuestions.Toxicology },
        { database_name: "Work_Environment", name: 'Work Environments & Industrial Processes', image: manufactor, questions: allQuestions.Work_Environment },
    ]);
    const handleCategoryClick = (questions, category_name, category_appear_name) => {
        setShowQuestions(questions)
        setSelectedCategory(category_name)
        setSelectedCategoryAppearName(category_appear_name)
    }
    if (!showQuestions) {
        return (
            <>
                <Navigationbar currUser={currUser} handleLogout={handleLogout} />
                <h1>Mastering the CIH Exam: A Complete Overview of All Categories</h1>
                <h4>If you lack familiarity with a specific exam category, it is advisable to review the fundamental concepts within that category before you begin practicing questions.</h4>
                <div className='category-container'>
                    {
                        allcategories.map((category) => <div onClick={() => handleCategoryClick(category.questions, category.database_name, category.name)} key={category.name} className='single-category'>
                            {category.name}
                            <img src={category.image} alt='CIH Exam Sample Questions' className='category-image' />
                            {currUser &&
                                <div className='number-of-questions'>Your Progress: {currUser.solved_question[0][category.database_name].length}/{category.questions.length}</div>
                            }
                            {currUser && <ProgressBar percentage={currUser.solved_question[0][category.database_name].length / category.questions.length * 100} />}
                            {!currUser && <div>Number of Questions: {category.questions.length}</div>}
                        </div>)
                    }
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Question questions={showQuestions} selectedCategory={selectedCategory} selectedCategoryAppearName={selectedCategoryAppearName} currUser={currUser} updateCurrUser={updateCurrUser} handleCategoryClick={handleCategoryClick} handleLogout={handleLogout} />
            </>
        )
    }
}
export default AllCategories