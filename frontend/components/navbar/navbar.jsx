import React from 'react';
import GreetingContainer from './greeting_container';

const Navbar = () => (
    <nav className="header">
        <ul className="header-list">
            <li><a href="#">Buy</a>
                <ul>
                </ul>
            </li>
            <li><a href="#">Rent</a>
                <ul>
                </ul>
            </li>
            <li><a href="#">Sell</a>
                <ul>
                </ul>
            </li>
            <li><a href="#">Home Loans</a>
                <ul>
                </ul>
            </li>
            <li><a href="#">Agent finder</a>
                <ul>
                </ul>
            </li>

        </ul>

        <h1 class="header-logo">
            <a href="#">Yillow</a>
        </h1>

        <ul className="header-list">
            <li><a href="#">Manage rentals</a></li>
            <li><a href="#">Advertise</a></li>
            <GreetingContainer />
            <li><a href="#">Help</a></li>
        </ul>
    </nav>  
)
    
export default Navbar;