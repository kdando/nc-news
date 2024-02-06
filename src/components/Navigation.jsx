import { Link } from 'react-router-dom';

import { useState } from 'react';

//STATES SET HERE:
//topics, filterQueries

export default function Navigation () {

    //state for burger menu
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
    
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    {/* <img src="https://cdn4.vectorstock.com/i/thumbs/84/43/retro-newspaper-vendor-kid-screaming-megaphone-vector-9168443.jpg" width="112" height="112" alt="Logo" /> */}
                    <h1>NC News</h1>
                </Link>

                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded={isActive ? 'true' : 'false'} onClick={toggleMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/topics" className="navbar-item">Topics</Link>
                    <Link to="/sort" className="navbar-item">Sort By</Link>
                    <Link to="/order" className="navbar-item">Order By</Link>
                </div>
            </div>
        </nav>
    );

}