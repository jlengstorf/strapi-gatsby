import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoImage = ({ className, small }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Img className={className} fluid={data.logo.childImageSharp.fluid} />
    </>
  )
}

const Logo = styled(LogoImage)`
  width: ${props => (props.small ? "150px" : "150px")};

  @media (min-width: 768px) {
    width: ${props => (props.small ? "150px" : "250px")};
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
`

const query = graphql`
  query logo {
    logo: file(relativePath: { eq: "logo.png" }) {
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Logo
