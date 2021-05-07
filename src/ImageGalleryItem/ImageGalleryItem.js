import React from 'react';

const ImageGalleryItem = ({ images,onOpen,selectedImg}) => {
   
    
    return (
        <>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <li className="ImageGalleryItem" key={id} >
                    <img src={webformatURL} alt={tags} onClick={onOpen} selectedImg={largeImageURL} className="ImageGalleryItem-image" />
                    {/* <div>{largeImageURL}</div> */}
                </li>
            ))}
        </>
    )
}

export default ImageGalleryItem;