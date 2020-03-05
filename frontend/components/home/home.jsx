import React from 'react';
import Navbar from '../navbar/navbar';
import dream from '../../../app/assets/images/dream-house-01.jpg';

const Home = () => (
    <div> 
        <Navbar />
        <div className="home-welcome">
            <h1>Reimagine home</h1>
            <h3>We'll help you find a place you'll love.</h3>
        </div>
        {/* <img src={dream} alt=""/> */}
    </div>
)

export default Home;