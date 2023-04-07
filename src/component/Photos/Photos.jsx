import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Photos = () => {
    const loadPhotos = useLoaderData();
    const photos = loadPhotos;
    return (
        <div>
            <h2 className='text-4xl underline font-bold text-center text-orange-600 mt-6'>Welcome to your Photos : {photos.length}</h2>
            <div className='grid grid-cols-4 gap-4 mt-12'>
                {
                    photos.map(photo => <Photo
                        key={photo.id}
                        photo={photo}
                    ></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;