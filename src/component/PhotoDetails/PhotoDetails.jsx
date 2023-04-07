import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PhotoDetails = () => {
    const photo = useLoaderData();
    const { title, id, url } = photo;
    const backNavigate = useNavigate()
    return (
        <div className='mt-12 mx-auto text-center'>
            <h5>ID: {id}</h5>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <button onClick={() => backNavigate(-1)} className="w-full border-2 border-gray-700 rounded-lg mt-6 bg-amber-400 p-2">Go back</button>
        </div>
    );
};

export default PhotoDetails;