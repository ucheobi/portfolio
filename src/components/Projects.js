import React, { useState } from 'react';
import { Link } from "gatsby"; 
import Project from './Project';
import Modal from '../components/Modal';
import ImageSlider from './ImageSlider';

const Projects = ({ projects, showLink }) => {

    const [value, setValue] = useState(false);
    const [slide, setSlide] = useState(0);

    const showModal = () => {
      setValue(true)
    }
  
    const hideModal = () => {
      setValue(false)
    }

    const handleClick = e => {
        let currentIndex = e.currentTarget.dataset.index;
        setSlide(currentIndex);
    }


    return (
        <section className="section projects" >
            <h2 className="title">My <span className="underline">Portfolio</span></h2>
            <p className="summary">Here are a snippet of my work and skillset implementation</p>               
                   
                <div className="section-center services-center" id="slideNum" >
                    <Modal show={value} handleClose={hideModal} >
                        <ImageSlider slideNumber={slide} />
                    </Modal>
                    {
                        projects.map((project, index) => { 
                               
                            return ( 
                                <div data-index={index} onClick={handleClick}>
                                  <Project key={index} {...project} showModal={showModal} />   
                                </div>
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
