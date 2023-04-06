import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='md:flex justify-between bg-slate-100 py-4 px-2'>
            <h2 className='text-2xl font-extrabold '>React router</h2>
            <nav >
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;