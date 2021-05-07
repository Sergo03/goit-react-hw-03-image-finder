import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


const ImageGallery = ({ images,onOpen }) => {
    
    return (
        <>
            <ul className='ImageGallery'>
                <ImageGalleryItem images={images} onOpen={onOpen }  />
            </ul>
        </>
    )
}
ImageGallery.propTypes = {
    onOpen: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
}

export default ImageGallery;