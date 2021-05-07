import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


const ImageGallery = ({ images,onOpen,selectedImg }) => {
    
    return (
        <>
            <ul className="ImageGallery">
                <ImageGalleryItem images={images} onOpen={onOpen } selectedImg={selectedImg} />
            </ul>
        </>
    )
}

export default ImageGallery;