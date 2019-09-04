import React from "react"
import styled from "styled-components"
import { setColor, setFontFamily } from "../../styles"

const Article = ({ className, children }) => {
  return <article className={className}>{children}</article>
}

export default styled(Article)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 1px solid ${setColor.accentColor};
  padding: 2rem;
  padding-top: 0;
  .grid {
    grid-column: 1 / span 2;
    grid-row: 1/2;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    color: ${setColor.accentColor};
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  a {
    color: ${setColor.accentColor};
    text-decoration: none;
    ${setFontFamily.main} font-size: 1rem;
  }

  > p {
    margin: 0 auto;
    display: inline-block;
    text-align: left;
    margin: 1rem 0;
    ${setFontFamily.main} font-size: 1rem;
  }

  div > p {
    padding: 1rem;
  }

  div {
    padding: 1rem;
  }
`
