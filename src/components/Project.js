import React from "react"
import PropTypes from "prop-types";
import Image from "gatsby-image";
import Button from "./Button";
import { FaGithubSquare } from "react-icons/fa";
import ProjectURL from "./ProjectURL";


const Project = ({ title, description, image, tech, github, showModal, hideModal }) => {

  return (
    <article className="service">
      <Image fluid={image.childImageSharp.fluid} />
      <ProjectURL showModal={showModal} hideModal={hideModal} />
      <h4>{title}</h4>
      <div className="project-underline"></div>
      <p>{description}</p>
      <div className="project-stack">
        <Button technologies={tech} />
      </div> 
      <span className="source">
          <a href={github}><FaGithubSquare></FaGithubSquare> Source Code</a>
      </span>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tech: PropTypes.arrayOf(PropTypes.object).isRequired,
  github: PropTypes.string.isRequired,
}

export default Project;
