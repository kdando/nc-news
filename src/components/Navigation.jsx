//React and Router part
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navigation ({ searchParams, setSearchParams, setFilterUpdated }) {


    //STATES
    const [isActive, setIsActive] = useState(false);

    //SETTING BURGER MENU VISIBILITY, FILTER UPDATED, WHAT TO SORT AND ORDER BY
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const setFilter = () => {
        setFilterUpdated(true);
    };

    const setSort = (criteria) => {
        searchParams.set('sort_by', criteria);
    };

    const setOrder = (direction) => {
        searchParams.set('order', direction);
    };

    ////////////
    //for some reason setting Params through a clone does not change
    //mutating original for now...to be addressed

    //   const setOrder = (direction) => {
    //     // const newParams = new URLSearchParams(searchParams);
    //     newParams.set('order', direction);
    //     // console.log(newParams, "<<<NEW PARAMS FROM BUTTON IN NAV")
    //     // setSearchParams(newParams);
    //   };

    //////////

    
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
    
            {/* THE LOGO */}
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <h1>KNC News</h1>
                </Link>

            {/* THE BURGER ICON FOR MOBILE VIEW */}
                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded={isActive ? 'true' : 'false'} onClick={toggleMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* THE NAVBAR ITSELF WITH STATE CHECK FOR BURGER ICON*/}
            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                
            {/* THE START (LEFT SIDE) OF THE NAVBAR AND "HOME" LINK */}
            <div className="navbar-start">

                <Link to="/" className="navbar-item">Home</Link>

                {/* THE TOPICS DROPDOWN */}
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className='navbar-link'>Topics</div>
                        <div className='navbar-dropdown'>
                            <Link  className='navbar-item' to='/topics/all/articles'>All</Link>
                            <Link to='/topics/coding' className='navbar-item'>Coding</Link>
                            <Link to='/topics/cooking' className='navbar-item'>Cooking</Link>
                            <Link to='/topics/football' className='navbar-item'>Football</Link>
                        </div>
                    </div>

                {/* THE SORT BY SELECTOR */}
                <div className='navbar-item select'>
                    <select onChange={(event) => setSort(event.target.value)}>
                        <option value='created_at'>Date</option>
                        <option value='comment_count'>Comments</option>
                        <option value='votes'>Votes</option>
                    </select>
                </div>

                {/* THE ORDER BY SELECTOR */}
                <div className='navbar-item select'>
                    <select onChange={(event) => setOrder(event.target.value)}>
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </select>
                </div>

                {/* THE BUTTON TO APPLY SORT/ORDER */}
                    <div className='navbar-item'>
                        <button className='button' onClick={setFilter}>Sort</button>
                    </div>

            </div>

            {/* THE END (RIGHT SIDE) OF NAVBAR - SWITCH USER LINK */}
            <div className='navbar-end'>
                <Link to='/switch-user' className='navbar-item'>Switch User</Link>
            </div>

            </div>
        </nav>
    );

}