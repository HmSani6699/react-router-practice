import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Photos = () => {
    const loadPhotos = useLoaderData();
    const photos = loadPhotos.splice(1, 50);
    return (
        <div>
            <h1>this is photos component:{photos.length}</h1>
            <div>
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