import React from 'react';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ images,onOpen}) => {
   
    
    return (
        <>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <li className='ImageGalleryItem' key={id} >
                    <img src={webformatURL} alt={tags} onClick={()=>onOpen(largeImageURL)}  className="ImageGalleryItem-image" />
                    
                </li>
            ))}
        </>
    )
}
ImageGalleryItem.propTypes = {
    onOpen: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
}

export default ImageGalleryItem;