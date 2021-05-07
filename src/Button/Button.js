import React from 'react';
import PropTypes from 'prop-types';

const Button = ({fetchImages }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
    
    return (
        <>
           <button className='Button' type='button' onClick={fetchImages}   > Load more</button>
        </>
    )
}
Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
}
export default Button;