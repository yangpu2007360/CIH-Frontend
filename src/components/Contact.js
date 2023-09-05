import React, { useRef, useState } from 'react'
import Navigationbar from './Navigationbar'
import emailjs from '@emailjs/browser';
import contactus from "../assets/CIH_Exam_Online_Prep_Contact.png"
import loading from "../assets/spinner.gif"

function Contact({ currUser, handleLogout }) {
    const [messageSent, setMessageSent] = useState(false);
    const [missingEmail, setMissingEmail] = useState(false);
    const [missingName, setMissingName] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setisLoading(true)
        const name_input = document.getElementById("enteredName").value
        const email_input = document.getElementById("enteredEmail").value
        if (name_input) {
            setMissingName(false)
        }
        if (email_input) {
            setMissingEmail(false)
        }
        if (name_input && email_input) {
            emailjs.sendForm('service_43k2ptr', 'template_66nzfp5', form.current, 'Qib90rd-sTEGkMfWJ')
                .then((result) => {
                    console.log(result.text);
                    setMessageSent(true)
                    setisLoading(false)
                }, (error) => {
                    console.log(error.text);
                });
        }
        else {
            if (!name_input) {
                setMissingName(true)
            }
            if (!email_input) {
                setMissingEmail(true)
            }
        }
    };
    const handleAnotherMessage = () => {
        setMessageSent(false)
    }
    if (messageSent) {
        return (
            <div>
                <Navigationbar currUser={currUser} handleLogout={handleLogout} />
                <div className='got-message'>
                    <div>We got your messages. Thank you. We will get back to you ASAP.</div>
                    <div className='sign-in-button' onClick={handleAnotherMessage}>Back</div>
                </div>
            </div >
        )
    }
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <div className='contact-title'>
                <img className='contact-image' src={contactus} alt='CIH Exam Sample Questions' />
                <div className='contact-message-container'>
                    <div className='leave-message'>Please leave us a message if you have any questions. We will get back to you within 48 hours.</div>
                    <div>If you need immediate help, please call 510-701-9463</div>
                    <div>or email paulyang2022360@gmail.com</div>
                </div>
            </div>
            {isLoading &&
                <img className='loading' src={loading} alt="sending" />
            }
            <form ref={form} onSubmit={sendEmail} className='message-container'>
                <div className='user-info'>
                    <label>Name</label>
                    <input type="text" name="user_name" id="enteredName" />
                    {missingName &&
                        <div className='missing-name'>
                            Please enter your name
                        </div>
                    }
                    <label>Email</label>
                    <input type="email" name="user_email" id="enteredEmail" />
                    {missingEmail &&
                        <div className='missing-email'>
                            Please enter your email
                        </div>
                    }
                    <label>Phone Number</label>
                    <input type="text" name="user_number" />
                </div>
                <div className='message-content-container'>
                    <label>Message</label>
                    <textarea name="message" className='text-area' cols="130" rows="20" />
                </div>
                <input type="submit" value="Send" />
            </form>
        </div >
    )
}
export default Contact