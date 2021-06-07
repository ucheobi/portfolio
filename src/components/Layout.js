import React, { useState } from 'react';
import SideBar from './SideBar';
import { FaAngleUp } from 'react-icons/fa';
import Footer from './templates/Footer';
import NavBar from './templates/NavBar';


const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const toggleSideBar = () => {
      setIsOpen(!isOpen);
    }
  

      if(typeof window !== "undefined"){
        var checkScrollTop = () => {
          if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
          } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
          }
        };
  
        var scrollTop = () =>{
          window.scrollTo({top: 0, behavior: 'smooth'});
        };
          
        window.addEventListener('scroll', checkScrollTop);
      }
    
    
    
    
    return (
        <>
          <NavBar toggleSideBar={toggleSideBar} /> 
          <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />      
            {children}
          <Footer />
          <FaAngleUp className={`top-up ${showScroll ? "show-display" : ""}`} id="top" onClick={scrollTop} />
        </>
    );
}

export default Layout;
