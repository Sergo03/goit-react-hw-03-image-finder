import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick }) => {
    
    return (
        <>
           <button className='Button' type='button' onClick={onClick}   > Load more</button>
        </>
  )

}
Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
}
export default Button;