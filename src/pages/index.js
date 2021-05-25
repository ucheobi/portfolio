import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Avatar from "../components/Avatar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Proficiency from "../components/Proficiency";
import Work from "../components/Work";


export default ({ data }) => {

  const {
    allStrapiProjects: {
      nodes: projects
    }
  } = data;

  return (
    <div>
      <Layout>
          <Avatar />
          <Education />
          <Proficiency />
          <Projects projects={projects} showLink />
          <Skills />
          <Work />  
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
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