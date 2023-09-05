import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import AllCategories from './components/AllCategories';
import React, { useState, useEffect } from 'react';
import PurchaseSuccess from './components/PurchaseSuccess';
import RegisterSuccess from './components/RegisterSuccess';
import PurchaseError from './components/PurchaseError';
import Sitemap from './components/Sitemap';
import Tips from './components/Tips';
import KeyConcept from './components/KeyConcept';
import PracticeExam from './components/PracticeExam';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from 'axios';
import MarkedQuestion from './components/MarkedQuestion';

function App() {
  function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    const encodedValue = encodeURIComponent(JSON.stringify(value));
    const cookieValue = encodedValue + '; expires=' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue + '; path=/';
  }
  function getCookie(name) {

    if (document.cookie) {
      const cookies = document.cookie.split('; ');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
          const encodedValue = cookie[1];
          const decodedValue = decodeURIComponent(encodedValue);
          return JSON.parse(decodedValue);
        }
      }
    }
    return null;
  }
  const [currUser, setCurrUser] = useState(getCookie('currUser'))
  useEffect(() => {
    if (currUser) {
      console.log("exsit user, will try to retrieve")
      const newRequest = { email: currUser.email, password: currUser.password }
      try {
        axios.post("/singleuser", newRequest).then(
          (response) => {
            if (response.data === 'Nouser') {
              return
            }
            if (response.data === 'wronginfo') {
              return
            }
            else {
              updateCurrUser(response.data)
            }
          }
        )
      }
      catch (error) {
        console.log(error)
      }
    }
  }, []);
  const updateCurrUser = (user) => {
    setCurrUser(user);
    setCookie('currUser', user, 90)
  }
  const handleLogout = () => {
    setCurrUser(null)
    setCookie('currUser', null, 90)
  }
  if (window.location.protocol !== 'https:') {
    const httpsURL = 'https://' + window.location.hostname + window.location.pathname;
    window.location.replace(httpsURL);
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route exact path="/" element={<Home currUser={currUser} handleLogout={handleLogout} />} />
          <Route path="/Industrial_Safety_Hub_Contact" element={<Contact currUser={currUser} handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login updateCurrUser={updateCurrUser} />} currUser={currUser} handleLogout={handleLogout} />
          <Route path="/CIH_Sample_Questions" element={<AllCategories currUser={currUser} updateCurrUser={updateCurrUser} handleLogout={handleLogout} />} />
          <Route path="/purchasesuccess" element={<PurchaseSuccess currUser={currUser} updateCurrUser={updateCurrUser} />} />
          <Route path="/registersuccess" element={<RegisterSuccess currUser={currUser} updateCurrUser={updateCurrUser} />} />
          <Route path="/purchaseerror" element={<PurchaseError currUser={currUser} />} />
          <Route path="/CIH_Exam_Tips" element={<Tips currUser={currUser} handleLogout={handleLogout} />} />
          <Route path="/CIH_Exam_Basics" element={<KeyConcept currUser={currUser} handleLogout={handleLogout} />} />
          <Route path="/CIH_Practice_Exam" element={<PracticeExam currUser={currUser} handleLogout={handleLogout} />} />
          <Route path="/CIH_Sample_Questions_Marked" element={<MarkedQuestion currUser={currUser} handleLogout={handleLogout} updateCurrUser={updateCurrUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
