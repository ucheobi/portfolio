import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import WorkEducation from './work-education';


const query = graphql`
  {
    allStrapiWorks {
      nodes {
        company
        date
        description
      }
    }
  }
`;

const Work = () => {
    const data = useStaticQuery(query);
    const { 
        allStrapiWorks: {nodes: works}
    } = data;
    
    return (
        <section className="section-jobs" id="work">
            <div className="edu-title">
                <h2 className="title">My Works <span className="underline">Experience</span></h2>
                <p className="summary">A snippet of my previous work involvements</p>
            </div>
            <div className="edu-items">
            {
              works.map((snippet, index) => {
                  const { company, description, date } = snippet;
                  return (
                     <WorkEducation key={index} role={company} description={description} date={date} /> 
                  )    
              })
            }
            </div>
        </section> 
    );
}

export default Work;
