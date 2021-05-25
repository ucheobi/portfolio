import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { CircularProgressbar } from "react-circular-progressbar";


const query = graphql`
    {
      allStrapiProficiencies {
        nodes {
          proficient
          level
        }
      }
    }
  `

const Proficiency = () => {
  
    const data = useStaticQuery(query);

    const { 
        allStrapiProficiencies:{
            nodes: proficiencies
        }
    } = data;


    return (
        <section className="profi">
            <h2 className="title">My Area of <span className="underline">Expertise</span></h2>
            <p>My expertise are shown in the segment below</p>
           
            <div className="profi-list">
                {
                    proficiencies.map((item, index) => {
                        const { proficient, level } = item; 

                        return (
                            <article key={index} className="profi-container">
                                <div className="profi-circular">
                                    <CircularProgressbar value={level} text={`${level}%`} />;                   
                                </div> 
                                <div className="profi-label">
                                    <p>{proficient}</p>
                                </div>                                   
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Proficiency;
