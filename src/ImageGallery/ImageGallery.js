import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


const ImageGallery = ({ images,onOpen }) => {
    
    return (
        <>
            <ul className="ImageGallery">
                <ImageGalleryItem images={images} onOpen={onOpen }/>
            </ul>
        </>
    )
}

export default ImageGallery;