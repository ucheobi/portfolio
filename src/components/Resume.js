import React from 'react';
import { graphql, useStaticQuery } from "gatsby";


const query = graphql`
    {
      allStrapiResumes {
        nodes {
          download {
            publicURL
          }
        }
      }
    }
  `

const Resume = () => {

    const data = useStaticQuery(query);

    const {allStrapiResumes: {
        nodes: download
    }} = data;
    
    const {download:{publicURL}} = download[0]
   
    return (
        <div className="btn">
            <a href={publicURL} download="uche_anota_resume" >Download my Resume</a>
        </div>   
    )
}

export default Resume;