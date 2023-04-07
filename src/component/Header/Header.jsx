import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='md:flex justify-between bg-slate-100 py-4 px-2'>
            <h2 className='text-2xl font-extrabold '>React router</h2>
            <nav >
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="about">About</ActiveLink>
                <ActiveLink to="contact">Contact</ActiveLink>
                <ActiveLink to="photos">Photos</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;