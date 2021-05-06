import React from 'react';

const ImageGalleryItem = ({ images,onOpen }) => {
   
    
    return (
        <>
            {images.map(({ id, webformatURL, tags,largeImageURL }) => (
                <li className="ImageGalleryItem" key={id} >
                    <img src={webformatURL} alt={tags} onClick={onOpen} className="ImageGalleryItem-image" />
                </li>
            ))}
        </>
    )
}

export default ImageGalleryItem;