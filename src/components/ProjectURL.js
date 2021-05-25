import React, { useState } from 'react';
import { FaLink, FaImages } from "react-icons/fa"
import Modal from './Modal';

const ProjectURL = ({showModal}) => {
  
    return (
        <div className="project-url">
            <button 
                type="button" 
                onClick={showModal} 
                className="pop-btn">
                    <FaImages className="icon-btn" size={60}></FaImages>
            </button>
        </div>
    );
}

export default ProjectURL;
