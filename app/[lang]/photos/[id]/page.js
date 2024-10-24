import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

const PhotoDetailsPage = async ({ params: { id, lang } }) => {


    return (
        <PhotoDetails id={id} lang={lang} />
    );
};

export default PhotoDetailsPage;