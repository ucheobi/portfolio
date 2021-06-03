import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
{
  allStrapiAbout {
    nodes {
      info
    }
  }
}
`

const About = () => {

    const data = useStaticQuery(query);

    const { allStrapiAbout: {
        nodes: about
    } } = data;

    const { info } = about[0];

    return <p className="avatar-text">{info}</p>

}

export default About;
