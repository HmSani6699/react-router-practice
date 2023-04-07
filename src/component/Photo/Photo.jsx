import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Photo = ({ photo }) => {
    const { id, url } = photo;
    const handelNavigate = useNavigate()
    return (
        <div className='bg-lime-700 rounded-md p-6'>
            <h1 className='text-center mb-4 text-4xl text-white font-extrabold'>ID: {id}</h1>
            <img src={url} alt="" />
            <Link to={`/photo/${id}`}><button className="w-full border-2 border-gray-700 rounded-lg mt-6 bg-amber-400 p-2">Photo details</button></Link>
            <Link to={`/photo/${id}`}><button onClick={() => handelNavigate(`/photo/${id}`)} className="w-full border-2 border-gray-700 rounded-lg mt-6 bg-amber-400 p-2">Details</button></Link>

        </div>
    );
};

export default Photo;