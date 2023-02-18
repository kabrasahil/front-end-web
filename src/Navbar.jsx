import React from 'react';
import './Navbar.css'

function navbar() {
    
    return (
        <div class="navbar">
            <div>
                <h1>IGTS NSUT</h1>
            </div>

            <button aria-controls="nav-links" aria-expanded="false" class="mobile-nav-toggle"></button>

            <nav>
                <ul data-visble="false" class="nav-links">
                    <li class="home">
                        <a href="#">Home</a>
                    </li>
                    <li class="blogs">
                        <a href="#">Blogs</a>
                    </li>
                    <li class="games">
                        <a href="#">Games</a>
                    </li>
                    <li class="about">
                        <a href="#">About</a>
                    </li>
                    <li class="events">
                        <a href="#">Events</a>
                    </li>
                    <li class="login">
                        <a href="#">Login | Register</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar