import React from 'react';
import { FaTimesCircle } from "react-icons/fa"


const Modal = ({ handleClose, show, children}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <FaTimesCircle className="close-arrow" onClick={handleClose} />
            </section>     
        </div>
    );
}

export default Modal;
