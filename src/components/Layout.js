import React, { useState } from 'react';
import SideBar from './SideBar';
//import Contact from './templates/Contact';
import Footer from './templates/Footer';
import NavBar from './templates/NavBar';


const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
          <NavBar toggleSideBar={toggleSideBar} /> 
          <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />      
            {children}
          <Footer />
        </>
    );
}

export default Layout;
