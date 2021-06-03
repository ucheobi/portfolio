import React from "react";
import { 
            FaFacebookSquare, 
            FaLinkedin,
            FaTwitterSquare,
            FaInstagramSquare       
        } from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com/uche.anota/",
    },
    {
        id:2,
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: "https://www.linkedIn.com"
    },
    {
        id: 3,
        icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
        url: "https://www.instagram.com/ucheobiefula/"
    },
    {
        id: 4,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://www.twitter.com/ucheobi2009"
    }
]

const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>
            {links}
        </ul>
    )
}