//React and Router part
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navigation ({ searchParams, setSearchParams, setFilterUpdated }) {


    //PARAMS FOR QUERIES
    const [sortedBy, setSortedBy] = useState(searchParams.get('sorted_by') || 'created_at');
    const [orderBy, setOrderBy] = useState(searchParams.get('order') || 'desc');
    const [topic, setTopic] = useState(searchParams.get('topic') || '');

    //STATES
    const [isActive, setIsActive] = useState(false);

    //SETTING BURGER MENU VISIBILITY
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    //UPDATE TOPIC FROM SELECTOR
    const handleTopicChange = (area) => {
        setTopic(area);
    }

    //UPDATE SORTED BY FROM SELECTOR
    const handleSortedByChange = (criteria) => {
        setSortedBy(criteria);
    };

    //UPDATE ORDER FROM SELECTOR
    const handleOrderChange = (direction) => {
        setOrderBy(direction);
    };

    const handleSubmit = () => {
        setSearchParams(new URLSearchParams({ sorted_by: sortedBy, order: orderBy, topic: topic }));
        setFilterUpdated(true);
      };

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

                {/* THE TOPIC SELECTOR */}
                <div className='navbar-item select'>
                    <select onChange={(event) => handleTopicChange(event.target.value)}>
                        <option value=''>All</option>
                        <option value='coding'>Coding</option>
                        <option value='cooking'>Cooking</option>
                        <option value='football'>Football</option>
                    </select>
                </div>

                {/* THE SORT BY SELECTOR */}
                <div className='navbar-item select'>
                    <select onChange={(event) => handleSortedByChange(event.target.value)}>
                        <option value='created_at'>Date</option>
                        <option value='comment_count'>Comments</option>
                        <option value='votes'>Votes</option>
                    </select>
                </div>

                {/* THE ORDER BY SELECTOR */}
                <div className='navbar-item select'>
                    <select onChange={(event) => handleOrderChange(event.target.value)}>
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </select>
                </div>

                {/* THE BUTTON TO APPLY SORT/ORDER */}
                    <div className='navbar-item'>
                        <button className='button' onClick={handleSubmit}>Filter</button>
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