import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        id:1,
        text: "home",
        url: "/",
        style: "home-active"
    },
    {
        id:2,
        text: "about",
        url: "#about_me",
        style: "about-style",
        href: ""
    },
    {
        id:3,
        text: "projects",
        url: "/projects/",
        style: "project-style"
    },
    {
        id:4,
        text: "blog",
        url: "/blog/",
        style: "blog-style"
    },
    {
        id:5,
        text: "contact",
        url: "/contact/",
        style: "contact-style"
    }
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id} >
            <Link className={link.style} to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`page-links ${styleClass} ? 
            styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}
