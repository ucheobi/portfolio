import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Title from './Title';
import Image from "gatsby-image";


const query = graphql`
{
    allStrapiSkills {
        nodes {
          images {
            childImageSharp {
                fluid(maxWidth: 10000, maxHeight: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          strapiId
        }
      }
}
`

const Skills = () => {
    const data = useStaticQuery(query);

    const { allStrapiSkills: {
            nodes: skills
        }
    } = data;

    return (
        <section className="skills">
        <h2 className="title">My <span className="underline">Skills</span> Highlights </h2>
        <p className="summary">My expertise are shown in the segment below</p>
            <div className="skill-list">
            {
                skills.map(skill => {
                    const { name, images, strapiId } = skill;
                    return (
                        <article key={strapiId} className="skill-set">
                            <Image fluid={images.childImageSharp.fluid} className='img-skill' />
                            <p>{name}</p>
                        </article>
                    )
                })
            }
            </div>
        </section>
       
    );
}

export default Skills;
