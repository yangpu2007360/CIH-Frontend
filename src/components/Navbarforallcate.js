import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import menu from '../assets/menu.png'

function Navbarforallcate({ currUser, handleLogout, handleBack }) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    const validAccess = (expire_date) => {
        let currDate = new Date();
        let date2 = new Date(expire_date);
        if (date2 >= currDate) {
            return true
        } else {
            return false
        }
    }
    const handleMenuClick = () => {
        const menuDiv = document.querySelector('.pop-up-menu');
        // Check if the menu is currently visible
        if (menuDiv.style.display === 'none' || menuDiv.style.display === '') {
            menuDiv.style.display = 'flex';
        } else {
            menuDiv.style.display = 'none';
        }
    }
    return (
        // <div className='nav-bar'>
        //     {width > 480 && <img src={logo} alt='CIH Exam Sample Questions' height='50px' />}
        //     {width > 480 && currUser && validAccess(currUser.expire_date) && <div className='hi-user tooltip'>Hi {currUser.name}
        //         <span class="tooltiptext">Your access will expire on {currUser.showdate}</span>
        //     </div>
        //     }
        //     {width > 480 && currUser && !validAccess(currUser.expire_date) && <div className='hi-user tooltip'>Hi {currUser.name}
        //         <span class="tooltiptext">Your access has expired on {currUser.showdate}</span>
        //     </div>
        //     }
        //     <Link className='nav-item' to="/">HOME</Link>
        //     <Link className='nav-item' to="/CIH_Exam_Tips">Exam Tips</Link>
        //     {width > 480 && <Link className='nav-item' to="/CIH_Exam_Basics">Key Concepts</Link>}
        //     <div className='nav-item' onClick={handleBack}>Practice Questions</div>
        //     <Link className='nav-item' to="/CIH_Practice_Exam">Practice Exam</Link>
        //     {currUser && <Link className='nav-item' to="/CIH_Sample_Questions_Marked">Marked Questions</Link>}
        //     {currUser ? <Link className='nav-item' to="/"><div onClick={handleLogout}>Log out</div></Link> : <Link className='nav-item' to="/login"><div>Log In/Register</div></Link>}
        //     {width > 480 && <Link className='nav-item' to="/Industrial_Safety_Hub_Contact">Contact</Link>}
        // </div>
        <>
            <div className='nav-bar'>
                <img src={logo} alt='Industrial Safety Exam Prep' height='50px' />
                {width > 480 && currUser && validAccess(currUser.expire_date) && <div className='tooltip'>Hi {currUser.name.split(' ')[0]}
                    <span class="tooltiptext">Your access will expire on {currUser.showdate}</span>
                </div>
                }
                {width > 480 && currUser && !validAccess(currUser.expire_date) && <div className='tooltip'>Hi {currUser.name.split(' ')[0]}
                    <span class="tooltiptext">Your access has expired on {currUser.showdate}</span>
                </div>
                }
                {width > 480 && <Link className='nav-item' to="/">HOME</Link>}
                {width > 480 && <Link className='nav-item' to="/CIH_Exam_Tips">Exam Tips</Link>}
                {width > 480 && <Link className='nav-item' to="/CIH_Exam_Basics">Key Concepts</Link>}
                {width > 480 && <Link className='nav-item' to="/CIH_Sample_Questions">Practice Questions</Link>}
                {width > 480 && <Link className='nav-item' to="/CIH_Practice_Exam">Practice Exam</Link>}
                {currUser && width > 480 && <Link className='nav-item' to="/CIH_Sample_Questions_Marked">Marked Questions</Link>}
                {currUser && width > 480 && <Link className='nav-item' to="/"><div onClick={handleLogout}>Log out</div></Link>}
                {!currUser && width > 480 && <Link className='nav-item' to="/login"><div>Log In/Register</div></Link>}
                {width > 480 && <Link className='nav-item' to="/Industrial_Safety_Hub_Contact">Contact</Link>}
                {width < 480 && <div className='nav-bar-title'>Industrial Safety Training Hub</div>}
                {width < 480 && <div className='menu-icon'><img onClick={handleMenuClick} src={menu} alt='menu' height='40px' /></div>}
            </div>
            <div className='pop-up-menu'>
                <Link className='nav-item' to="/">HOME</Link>
                <Link className='nav-item' to="/CIH_Exam_Tips">Exam Tips</Link>
                <Link className='nav-item' to="/CIH_Exam_Basics">Key Concepts</Link>
                <Link className='nav-item' to="/CIH_Sample_Questions">Practice Questions</Link>
                <Link className='nav-item' to="/CIH_Practice_Exam">Practice Exam</Link>
                {currUser && <Link className='nav-item' to="/CIH_Sample_Questions_Marked">Marked Questions</Link>}
                {currUser && <Link className='nav-item' to="/"><div onClick={handleLogout}>Log out</div></Link>}
                {!currUser && <Link className='nav-item' to="/login"><div>Log In/Register</div></Link>}
            </div>
        </>
    )
}
export default Navbarforallcate