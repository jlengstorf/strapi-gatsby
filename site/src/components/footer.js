import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import NewsletterSignup from "./newsletterSignup"
import { setColor } from "../styles"
import { ColumnMenu } from "../components/menu"
import Img from "gatsby-image"
import { menuItems } from "../seedData"

const Footer = styled.footer`
  background-color: ${setColor.lightGrey};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0 2rem;

  aside {
    padding: 2rem 0;
  }

  .form-h3 {
    text-align: left;
    padding-left: 0.5rem;
  }
  .form-p {
    text-align: left;
    padding-left: 0.5rem;
    border-top: none;
    padding-top: none;
  }

  span {
    color: ${setColor.accentColor};
    font-size: 1.1rem;
    padding-right: 0.25rem;
  }

  aside > section > h3 {
    color: ${setColor.mainWhite};
    text-align: center;
  }
`

const Aside = styled.aside`
  max-width: 350px;
  display: flex;
  flex-direction: column;

  a {
    width: 350px;
  }
`

const PrivacyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${setColor.lightGrey};
  color: ${setColor.mainBlack};
  padding: 2rem 1rem 0.5rem;

  & > p {
    width: 100%;
    border-top: 1px solid ${setColor.primaryColor};
    margin-top: 2rem;
    padding-top: 1rem;
    text-align: center;
  }
`

const Div = styled.div`
  ul {
    display: flex;
    align-items: start;
    flex-wrap: nowrap;
  }
`

const FooterSection = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Footer>
        <Aside>
          <Link to="/">
            <Img fluid={image.sharp.fluid} />
          </Link>
        </Aside>

        <Aside>
          <Div>
            <ColumnMenu menuItems={menuItems} />
          </Div>
        </Aside>
        <Aside>
          <NewsletterSignup />
        </Aside>
      </Footer>
      <PrivacyFooter>
        <p>
          <a href="https://github.com/davidkartuzinski/food-with-friends-2">
            Food with friends
          </a>{" "}
          Theme is licensed{" "}
          <a href="https://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">
            Creative Commons
          </a>
          . All Rights Reserved for images from Instagram Account{" "}
          <a href="https://www.instagram.com/meat_with/">meat_with</a> .
        </p>
      </PrivacyFooter>
    </>
  )
}

export default FooterSection
