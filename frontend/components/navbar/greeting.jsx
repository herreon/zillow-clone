import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    
    const myYillow = () => (
        <li>
            <a href="#">My Yillow</a>
            <ul className="header-myyillow">
                <li>Saved searches
                    <Link to="#">View all</Link>
                </li>

                <li>My homes
                    <Link to="#">Saved homes</Link>
                </li>

                <li>My account
                    <Link to="#">Profile</Link>
                </li>

                <li>
                    <button className="header-button" onClick={logout}>Sign out</button>
                </li>
            </ul>
        </li>
    )

    const sessionLinks = () => (
        <li className="signin-join">
            <Link to="/signin">Sign in</Link>or
            {/* &nbsp;or&nbsp; */}
            <Link to="/join">Join</Link>
        </li>
    )
                
    return currentUser ? myYillow() : sessionLinks();
}


export default Greeting;