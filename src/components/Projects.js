import React, { useState } from 'react';
import { Link } from "gatsby"; 
import Project from './Project';
import Modal from '../components/Modal';
import ImageSlider from './ImageSlider';

const Projects = ({ projects, showLink }) => {

    const [value, setValue] = useState(false);

    const showModal = () => {
      setValue(true)
    }
  
    const hideModal = () => {
      setValue(false)
    }

 

    return (
        <section className="section projects" >
            <h2 className="title">My <span className="underline">Portfolio</span></h2>
            <p className="summary">Here are a snippet of my work and skillset implementation</p>
                    
                <Modal show={value} handleClose={hideModal} >
                    <ImageSlider slideNumber={5} />
                </Modal>
                   
                <div className="section-center services-center" >
                    {
                        projects.map((project) => {
                            return (
                                <Project key={project.id} {...project} showModal={showModal} />
                            )
                        })
                    }  
                </div>          
            {
                showLink && (
                    <Link to="/projects" className="btn center-btn">
                        view all projects
                    </Link>
                )
            }
        </section>
    );
}

export default Projects;
