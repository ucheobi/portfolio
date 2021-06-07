import React from 'react';
import { FaImages } from "react-icons/fa"


const ProjectURL = ({showModal}) => {
  
    return (
        <div className="project-url" >
            <button 
                type="button" 
                onClick={showModal} 
                className="pop-btn">
                    <FaImages className="icon-btn" size={22}></FaImages>
            </button>
        </div>
    );
}

export default ProjectURL;
