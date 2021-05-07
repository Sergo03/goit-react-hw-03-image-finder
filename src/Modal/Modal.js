import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRef=document.querySelector('#modal-root')




class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handlekeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handlekeyDown)
    }

    handlekeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
        
    }

    render() {
     
        return createPortal(
            
             <div className='Overlay' onClick={this.handleDropClick}>
                <div className='Modal'>
                    <img src={this.props.selectedImg} alt="" />
                </div>
            </div>
        ,modalRef,)

    }

}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    selectedImg: PropTypes.string.isRequired,
}

export default Modal;

 