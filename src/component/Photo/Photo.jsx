import React from 'react';

const Photo = ({ photo }) => {
    const { id, url } = photo;
    return (
        <div className='bg-lime-700 rounded-md p-6'>
            <h1 className='text-center mb-4 text-4xl text-white font-extrabold'>ID: {id}</h1>
            <img src={url} alt="" />
        </div>
    );
};

export default Photo;