import React from 'react';
import SocialLinks from "../constants/social-links";
import Links from "../constants/links";
import { FaTimes } from "react-icons/fa"; 

const SideBar = ({ isOpen, toggleSideBar }) => {

    return (
        <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
            <button className="close-btn" onClick={toggleSideBar}>
                <FaTimes />
            </button>
            <div className="side-container">
                <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
                <SocialLinks  styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
            </div>
        </aside>
    );
}

export default SideBar;
