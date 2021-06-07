import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import Resume from "./Resume";
import About from "./About";

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
      <section className='avatar' id="about_me">
          <div className="avatar-dev">
            <Image fluid={fluid} className="avatar-img" alt="Image_Avatar" />
            <h3>Hi, I'm <span className="underline">Uche</span></h3>
          </div>
         
          <div className="avatar-note">
              <h2 className="title">A Little <span className="underline">About</span> Me</h2>
              <About />                
          </div> 
          <Resume />   
      </section>
  )
}

export default Avatar;