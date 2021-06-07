import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Projects from '../components/Projects';


const ProjectPage = ({ data: {
    allStrapiProjects:{nodes: projects}
}}) => {

    return (
     
        <Layout>
            <section className="projects-page">
                <Projects projects={projects} title="all projects" />
            </section>
        </Layout>
    );
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        strapiId
        description
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tech {
          id
          name
        }
      }
    }
  }
`

export default ProjectPage;
