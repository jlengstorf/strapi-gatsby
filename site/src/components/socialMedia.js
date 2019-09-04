import React from "react"
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io"
import styled from "styled-components"
import { setColor, setFontFamily } from "../styles"

const Div = styled.div`
  border-top: 1px solid ${setColor.accentColor};
  border-bottom: 1px solid ${setColor.accentColor};
  border: 1px solid ${setColor.accentColor};
  padding: ${props => props.theme.padding};
  background-color: transparent;
  margin-top: 2rem;
  padding: 1rem;

  h2 {
    display: ${props => props.theme.displayH2};
    font-size: 1.5rem;
    ${setFontFamily.serif};
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    padding: 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  li {
    padding: 0.5rem;
    position: relative;
    list-style-type: none;
  }
  a {
    font-size: 120%;
    text-decoration: none;
    color: ${setColor.accentColor};

    :hover,
    :active {
      color: ${setColor.mainGrey};
    }
  }
`

const SocialMedia = () => {
  return (
    <Div>
      <h2>Follow Us</h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/">
            <IoLogoInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <IoLogoTwitter />
          </a>
        </li>
      </ul>
    </Div>
  )
}

export default SocialMedia
