import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhotoDetails = () => {
    const photo = useLoaderData();
    const { title, id, url } = photo;
    return (
        <div className='mt-12 mx-auto text-center'>
            <h5>ID: {id}</h5>
            <h1 className='text-4xl font-bold'>{title}</h1>
        </div>
    );
};

export default PhotoDetails;