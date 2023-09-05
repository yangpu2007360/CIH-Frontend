import React from 'react'
import Navigationbar from './Navigationbar'
import Title from './Title';
import ExampleQuestions from "./ExampleQuestions"
import Features from './Features';
import Footnote from './Footnote';
import IntroVideo from './IntroVideo';

function Home({ currUser, handleLogout }) {
    return (
        <div>
            <Navigationbar currUser={currUser} handleLogout={handleLogout} />
            <Title currUser={currUser} />
            <IntroVideo />
            <ExampleQuestions />
            <Features />
            <Footnote />
        </div>
    )
}
export default Home