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

                    <div className="navbar-item has-dropdown is-hoverable">

                        <div className='navbar-link'>Topics</div>

                        <div className='navbar-dropdown'>
                            <Link  className='navbar-item' to='/topics/all'>All</Link>
                            <Link to='/topics/coding' className='navbar-item'>Coding</Link>
                            <Link to='/topics/cooking' className='navbar-item'>Cooking</Link>
                            <Link to='/topics/football' className='navbar-item'>Football</Link>
                        </div>

                    </div>

                    <Link to="/sort" className="navbar-item">Sort By</Link>
                    <Link to="/order" className="navbar-item">Order By</Link>
                </div>
                <div className='navbar-end'>
                    <p className='navbar-item'>Switch User</p>
                </div>
            </div>
        </nav>
    );

}