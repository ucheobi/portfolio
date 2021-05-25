import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import Title from './Title';
import WorkEducation from './work-education';


const query = graphql`
    {
      allStrapiResumes {
        nodes {
          education {
            id
            college
            description
          }
        }
      }
    }
  `

const Education = () => {
    const data = useStaticQuery(query);

    const { 
        allStrapiResumes: {
            nodes:  educations
        }
    } = data;

    const { education } = educations[0];


    return (
        <section className="education">
            <div className="edu-title">
                <h2 className="title">My <span className="underline">Educational</span> Background</h2>
                <p className="summary">Here are a comprehensive listing of my educational capabilities as a complement to my professional abilities.</p>
            </div> 
            <div className="edu-items">
                {
                    education.map((snippet, index) => {
                        const { college, description } = snippet;
                        return (
                            <WorkEducation key={index} role={college} description={description} />
                        )      
                    })
                }       
            </div>  
        </section>
    );
}

export default Education;
