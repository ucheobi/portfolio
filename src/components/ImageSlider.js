import React,{ useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const query = graphql`
 {
    allStrapiProjects{
    nodes {
        galery {
            slider {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
    }
    }
}
`;

const ImageSlider = ({slideNumber=1, hide}) => {
    const data = useStaticQuery(query)

    const {allStrapiProjects:{
            nodes:galleries       
        } 
    } = data;

    const { galery } = galleries[slideNumber];

    const [current, setCurrent] = useState(0);
    const length = galery.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(galery) || galery.length <= 0){
        return null;
    }

    console.log(current);
  
    return (
        <section className="slider">
            <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
        
                {
                    galery.map((element,index) => {
                        const { slider: {childImageSharp:{fluid}} } = element;
                        return(
                            <div   
                                className={index === current ? 'slide active' :  'slide'} 
                                key={index}
                            >
                                {index === current && (
                                    <Image key={index} fluid={fluid} classNames="slider-image" />
                                )}
                            </div>
                        )
                    }) 
                }
        </section>
    )
}

export default ImageSlider;
