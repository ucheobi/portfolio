import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
{
  allStrapiAbout {
    nodes {
      title
      info
      description
      management
      hobby
      ability 
    }
  }
}
`

const About = () => {

    const data = useStaticQuery(query);

    const { allStrapiAbout: {
        nodes: about
    } } = data;

    const { 
      title,
      info,
      description,
      hobby,
   } = about[0];

    return (
      <section className="avatar-text">
        <p>{title}</p>
        <p >{info}</p>
        <p >{description}</p>
        <p >{hobby}</p>
      </section>
    ) 
    
    

}

export default About;
