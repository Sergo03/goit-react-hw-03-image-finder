import React, {Component} from 'react';
import Style from './Style.module.css';
import { createPortal } from 'react-dom';

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
            
             <div className={Style.Overlay} onClick={this.handleDropClick}>
                <div className={Style.Modal}>
                    <img src='' alt="" />
                </div>
            </div>
        ,modalRef,)

    }

}


export default Modal;

 