import React from 'react';
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links";

const NavBar = ({ toggleSideBar }) => {
    return ( 
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className="logo">
                        <span className="initials">UA</span>
                        <span className="full-names">Uche Anota</span>
                    </div>
                    <button className="toggle-btn" type="button" onClick={toggleSideBar}>
                        <FaAlignRight />
                    </button>
                </div>
                <PageLinks styleClass='nav-links'></PageLinks>
            </div>
        </nav>
    );
}

export default NavBar;
