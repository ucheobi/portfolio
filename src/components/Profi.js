import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Title from './Title';

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
        
           
            <div className="profi-list">
                {
                    proficiencies.map((item, index) => {
                        const { proficient, level } = item; 

                        return (
                            <article key={index} className="profi-container">
                                <div className="profi-circular">
                                    <div className="profi-level">{level}<span>%</span></div>                     
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
