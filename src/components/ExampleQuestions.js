import React, { useState } from 'react'
import Thumbup from './Thumbup'
import Pdf from './ABIH_Equation_Sheet.pdf';

function ExampleQuestions() {
    const ExampleQuestions = [
        {
            number: 1,
            description: "What is the purpose of the sampling media used in air sampling?",
            choices: ['A. To collect and retain airborne contaminants for analysis', 'B. To filter out non-target particles in the air', 'C. To generate a measurable signal proportional to the concentration of the contaminant', 'D. To calibrate the air sampling instrument before use'],
            answer: 'A',
            explain: 'Sampling media can include filters, sorbents, and other materials that can capture and retain particles, gases, vapors, or other contaminants present in the air. Once the sampling media is collected, it can be analyzed in a laboratory to determine the concentration of the contaminant in the sample.'
        },
        {
            number: 2,
            description: "What is the cumulative sound pressure level of the following readings: 70 dB, 75 dB, and 80 dB.",
            choices: [
                "A. 80.5 dB",
                "B. 81.5 dB",
                "C. 83.5 dB",
                "D. 71.5 dB"
            ],
            answer: "B",
            explain: "Use Equation 7 in Noise. Lpt = total of all sound pressure levels in dB = 10*log(10^(70/10) + 10^(75/10) + 10^(80/10) = 81.5 dB.\n\nSound pressure level (SPL) is a measure of the intensity or loudness of a sound relative to a reference level. It quantifies the pressure variations caused by a sound wave in the air or another medium. SPL is commonly expressed in decibels (dB) and is based on a logarithmic scale."
        },
        {
            number: 3,
            description: "A spill of toluene in a room with a volume of 30,000 cubic feet results in an initial concentration of 50 ppm. After the use of toluene is stopped, the effective rate of ventilation is measured at 6,000 cubic feet of dilution air per minute. How long will it take for the concentration of toluene to decrease to the permissible exposure limit (PEL) of 10 ppm?",
            choices: [
                "A. 8 min",
                "B. 16 min",
                "C. 50 min",
                "D. 2 min"
            ],
            answer: "A",
            explain: "Use Equation 18 in Ventilation. t2=final time in min; t1=initial time in min; Vr= volume of enclosure in cubic feet; Cg1 = initial concentral Cg2= final concentration Q’=effective rate of ventilation in cfm. t2-t1=-30000/6000*ln(10/50)=8min "
        },
        {
            number: 4,
            description: "Which of the following types of radiation has the highest ionizing energy and the greatest potential for causing biological damage?",
            choices: [
                "A. Alpha radiation",
                "B. Beta radiation",
                "C. Gamma radiation",
                "D. X-rays"
            ],
            answer: "C",
            explain: "Gamma rays are a form of ionizing electromagnetic radiation that have the highest energy and shortest wavelength of all forms of radiation in the electromagnetic spectrum. Gamma radiation can penetrate deeply into the body and can cause damage to cells and DNA, which can lead to cancer and other health effects. Alpha radiation (A), beta radiation (B), and X-rays (D) are also forms of ionizing radiation, but they have lower energy and a shorter range of penetration compared to gamma radiation."
        },
        {
            number: 5,
            description: "Which of the following statements accurately describes mercury exposure in the workplace?",
            choices: [
                "A. Mercury exposure is primarily a concern in the mining and extraction industry, where it is commonly found in high concentrations.",
                "B. Mercury exposure is limited to the inhalation of mercury vapor, as it does not readily penetrate the skin.",
                "C. Mercury exposure can occur through inhalation of mercury vapor, ingestion of contaminated food or water, and absorption through the skin.",
                "D. Mercury exposure is generally harmless and does not pose any significant health risks to workers in industrial settings."
            ],
            answer: "C",
            explain: "Mercury exposure in the workplace can occur through various routes, including inhalation of mercury vapor, ingestion of contaminated food or water, and absorption through the skin. Inhalation of mercury vapor is a common route of exposure in industries where mercury or mercury-containing substances are used, such as in dental clinics, laboratories, or industries involving the production of electrical equipment, batteries, or fluorescent lamps.\n\nHowever, it's important to note that exposure to mercury vapor is not the only concern. Mercury can also contaminate food and water sources, primarily through environmental pollution, such as industrial emissions or improper disposal of mercury-containing products. Ingestion of contaminated food or water can lead to mercury exposure.\n\nFurthermore, mercury compounds, such as methylmercury, can be absorbed through the skin. This is of particular concern in industries where workers come into direct contact with mercury-containing substances or chemicals."
        },
    ]
    const [currIndex, setCurrIndex] = useState(0)
    const currQuestion = ExampleQuestions[currIndex]
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
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
        setCurrIndex(index % 5)
        reSet()
    }
    const handlePrev = (index) => {
        console.log("going back to prev question")
        let newIndex
        if (index - 2 > -1) {
            newIndex = index - 2
        } else {
            newIndex = 0
        }
        setCurrIndex(newIndex % 5)
        reSet()
    }
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
        <div className='example-questions'>
            <div className='question-card'>
                <div>Example Question{currQuestion.number} of 5</div>
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
                                <Thumbup />
                            </div>
                            <div>Explaination: {currQuestion.explain}</div>
                        </div>
                    }
                    {submittedAnswer != null && submittedAnswer !== currQuestion.answer &&
                        <div className='explain'>
                            <h3 className='result'>Wrong Answer</h3>
                            <div>Explaination: {currQuestion.explain}</div>
                        </div>
                    }
                    <div className="next-question" onClick={() => handleNext(currQuestion.number)}>NEXT →</div>
                    <a className='equation-sheet' href={Pdf} target="_blank">Equation Sheet</a>
                    <div className="previous-question" onClick={() => handlePrev(currQuestion.number)}>PREV ←</div>
                </div>
            </div>
        </div>
    )
}
export default ExampleQuestions