import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {
    
    const myYillow = () => (
        <li className="profile">
            <a h1ref="#">My Yillow</a>

            <ul className="profile-dropdown">
                <li>
                    <label>Saved searches</label>
                    <Link id="navlink" to="#">View all</Link>
                </li>

                <li>
                    <label>My homes</label>
                    <Link id="navlink" to="#">Saved homes</Link>
                </li>

                <li>
                    <label>My account</label>
                    <Link id="navlink" to="#">Profile</Link>
                </li>

                <li>
                    <button id="navlink" className="profile-signout" onClick={logout}>Sign out</button>
                </li>
            </ul>
        </li>
    )

    const sessionLinks = () => (
        <li className="signin-join">
            <button id="signin" onClick={() => openModal('signin')}>Sign in</button>
            &nbsp;or&nbsp;
            <button id="join" onClick={() => openModal('join')}>Join</button>
        
        </li>
    )
                
    return currentUser ? myYillow() : sessionLinks();
}


export default Greeting;