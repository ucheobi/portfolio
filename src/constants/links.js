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
        text: "work",
        url: "#work/",
        style: "work-style"
    },
    {
        id:5,
        text: "expertise",
        url: "#expertise/",
        style: "expertise-style"
    },
    {
        id:6,
        text: "blog",
        url: "/",
        style: "blog-style"
    },
    {
        id:7,
        text: "contact",
        url: "/contact/",
        style: "contact-style"
    }
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id} className="page-links">
            <Link className={link.style} to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={` ${styleClass} ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}
