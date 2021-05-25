import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image";
import SocialLinks from "../constants/social-links";
import Resume from "./Resume";

const Avatar = () => {
  const data = useStaticQuery(graphql`
    {
      file (relativePath: { eq: "profile-image.jpeg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { file: {
      childImageSharp: {
          fluid
      }
  } } = data;

  return (
      <section className='avatar'>
        <div className='avatar-center'>
            <Image fluid={fluid} className="avatar-img" />         
            <article className="avatar-info">
               <div className="avatar-note">
                    <h2 className="title">A Little <span className="underline" id="about_me">About</span> Me</h2>
                    <p className="avatar-text">An enthusiastic and passionate full-stack web development, agile methodology, REST architecture, and JavaScript is my primary programming language. For the past three years, I've been working nearly exclusively with software engineering and focusing on web applications. I specialize in JavaScript using React frameworks and Node.js for backend (with a small dose of .Net experience).</p>
                    <Resume />
                    <SocialLinks />
               </div> 
            </article>  
        </div>
      </section>
  )
}

export default Avatar;