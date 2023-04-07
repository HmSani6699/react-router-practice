import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ photo }) => {
    const { id, url } = photo;
    return (
        <div className='bg-lime-700 rounded-md p-6'>
            <h1 className='text-center mb-4 text-4xl text-white font-extrabold'>ID: {id}</h1>
            <img src={url} alt="" />
            <Link to={`/photo/${id}`}><button className="w-full border-2 border-gray-700 rounded-lg mt-6 bg-amber-400 p-2">Photo details</button></Link>
        </div>
    );
};

export default Photo;