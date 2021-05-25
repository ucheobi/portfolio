import React from 'react';
import SocialLinks from "../../constants/social-links";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-items">
                <SocialLinks styleClass="footer-links"></SocialLinks>
                <h4>
                    copyright&copy; {new Date().getFullYear()}
                    <span className="footer-note"> &copy;Uche Anota</span> all rights reserved
                </h4>
            </div>
        </footer>
    );
}

export default Footer;
