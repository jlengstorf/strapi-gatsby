import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { setColor, setFontFamily } from "../styles"

const Section = styled.section`
  padding: 1rem;
  border: solid 1px ${setColor.accentColor};
  ${setFontFamily.main}
  h3 {
    text-align: center;
    ${setFontFamily.serif}
    font-size: 1.5rem;
  }
  small {
    text-align: center;
    display: block;
    padding: 0.25rem;
  }
  margin-bottom: 2rem;
`

const Bio = ({ className, small }) => {
  const data = useStaticQuery(graphql`
    {
      bio: strapiBios {
        headline
        content
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <h3>{data.bio.headline}</h3>
      <Img className={className} fluid={data.bio.image.childImageSharp.fluid} />
      <small>{data.bio.author}</small>
      <p>{data.bio.content}</p>
    </Section>
  )
}

export default Bio
