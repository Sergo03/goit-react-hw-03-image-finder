import React from 'react';

const Button = ({ fetchImages }) => {
    
    
    return (
        <>
           <button type='button' onClick={fetchImages}> Load more</button>
        </>
    )
}

export default Button;