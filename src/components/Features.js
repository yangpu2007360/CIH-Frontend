import React from 'react'
import celebrate from '../assets/Pass_CIH_Exam.png'

function Features() {
    return (
        <div className='key-feature'>
            <div className='our-features'>KEY FEATURES</div>
            <div><img src={celebrate} alt='CIH exam online practice' className='celebrate' /></div>
            <div className='features'>
                <div className='single-feature'>
                    <div className='feature-title'>800+ Carefully Designed Questions</div>
                    <div className='feature-describe'>Our questions are developed by CIHs and comply with the latest references, standards and regulations in 2023. The database inclues all 16 categories in the exam.</div>
                </div>
                <div className='single-feature'>
                    <div className='feature-title'>Questions for Every Formula</div>
                    <div className='feature-describe'>Being able to solve problems by the equation sheet is essential to pass the exam. We provide at least one question for each formula in the sheet</div>
                </div>
                <div className='single-feature'>
                    <div className='feature-title'>Clear Explaination</div>
                    <div className='feature-describe'>Each question comes with clearly written explaination that contains helpful knowledge for your exam and career.</div>
                </div>
                <div className='single-feature'><div className='feature-title'>Mark Your Knowledge Gap</div>
                    <div className='feature-describe'>You can save the questions you have not mastered yet and practice again and again.</div></div>
                <div className='single-feature'><div className='feature-title'>Money Back Guarantee</div>
                    <div className='feature-describe'>
                        If you have successfully completed all the questions but did not pass the CIH exam, we offer a Money Back Guarantee, ensuring that all your money will be refunded.</div></div>
            </div>
        </div>
    )
}
export default Features