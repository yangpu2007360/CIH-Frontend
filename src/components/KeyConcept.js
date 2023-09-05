import React, { useState, useEffect } from 'react'
import Navigationbar from './Navigationbar'
import { ventilation_concepts } from '../concepts/ventilation'
import { air_sampling_concepts } from '../concepts/air_sampling'
import { analytical_chemistry_concepts } from '../concepts/analytical_chemistry'
import { biohazards_concepts } from '../concepts/biohazards'
import { biostats_epi_concepts } from '../concepts/biostats_epi'
import { noise_concepts } from '../concepts/noise'
import { radiation_concepts } from '../concepts/radiation'
import { toxicology_concepts } from '../concepts/toxicology'

function KeyConcept({ currUser, handleLogout }) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("Air_Sampling")
    const [categoryIndex, setCategoryIndex] = useState(0)
    const all_categories = [{ appearname: "Air Sampling ", databasename: "Air_Sampling" }, { appearname: "Analytical Chemistry", databasename: "Analytical_Chemistry" }, { appearname: "Biohazards", databasename: "Biohazards" }, { appearname: "Biostats & Epi", databasename: "Biostats_Epi" }, { appearname: "Ventilation", databasename: "Ventilation" }, { appearname: "Noise", databasename: "Noise" }, { appearname: "Radiation", databasename: "Radiation" }, { appearname: "Toxicology", databasename: "Toxicology" }]
    const selectCategory = (name) => {
        setSelectedCategory(name)
        setCategoryIndex(all_categories.findIndex(category => category.databasename === name))
    }
    const concept_content = {
        'Air_Sampling': air_sampling_concepts,
        'Analytical_Chemistry': analytical_chemistry_concepts,
        'Biohazards': biohazards_concepts,
        'Biostats_Epi': biostats_epi_concepts,
        'Ventilation': ventilation_concepts,
        'Noise': noise_concepts,
        'Radiation': radiation_concepts,
        'Toxicology': toxicology_concepts,
    }
    const handleNext = (index) => {
        setCategoryIndex((index + 1) % all_categories.length)
        console.log("new index", (index + 1) % all_categories.length)
        setSelectedCategory(all_categories[(index + 1) % all_categories.length].databasename)
    }
    const handlePrev = (index) => {
        let newIndex
        if (index - 1 < 0) {
            newIndex = 0
        }
        else {
            newIndex = index - 1
        }
        setCategoryIndex(newIndex)
        setSelectedCategory(all_categories[newIndex].databasename)
        console.log("Prev category")
    }

    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <h1>Key Concepts For Essential CIH Exam Categories</h1>
            <h4>"Mastery is born from a thorough understanding of the fundamentals." - John Wooden</h4>
            <div className='marked_questions_container'>
                {width > 480 &&
                    <div className='all_marked_questions'>
                        {all_categories.map((category) => (
                            <div key={category.appearname} className={(category.databasename === selectedCategory ? "selected-background" : 'category-marked')} onClick={() => { selectCategory(category.databasename) }}>{category.appearname}</div>
                        ))}
                    </div>
                }

                <div className='question-card-marked'><div className='tip-keypoint'>{selectedCategory}</div>
                    <div className='concept-content'>
                        {selectedCategory && (
                            <div className='explain-concept'>{concept_content[selectedCategory].map((concept) => (
                                <div><span style={{ fontWeight: 'bold', fontSize: '20px' }}>{concept.name}</span>: {concept.description}</div>
                            ))}</div>
                        )}
                    </div>
                    <div className="next-question" onClick={() => handleNext(categoryIndex)}>NEXT →</div>
                    <div className="previous-question" onClick={() => handlePrev(categoryIndex)}>PREV ←</div>
                </div>
            </div>

        </div>
    )
}

export default KeyConcept