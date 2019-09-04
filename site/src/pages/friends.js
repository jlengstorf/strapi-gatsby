import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { setFontFamily, setColor } from "../styles"

const UL = styled.ul`
  padding: 1rem;
  display: block;
  ${setFontFamily.main}

  a {
    text-decoration: none;
    padding: 1rem;
    color: ${setColor.mainBlack};
    display: block;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  li {
    margin-bottom: 1rem;
  }
  list-style: none;

  ul > li > a {
    list-style: none;
    padding: 0;
    color: ${setColor.accentColor};
  }
  ul > li {
    list-style: none;
    padding: 0;
  }
`
const Friends = () => {
  return (
    <div>
      <Layout>
        <UL>
          <li>
            <a href="http://">David</a>
            <ul>
              <li>
                <a href="/">BBQ Chicken</a>
              </li>
              <li>
                <a href="/">Another Event</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://">Jason</a>
            <ul>
              <li>
                <a href="/">Event 1</a>
              </li>
              <li>
                <a href="/">Event 2</a>
              </li>
              <li>
                <a href="/">Event 3</a>
              </li>
              <li>
                <a href="/">Event 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://">Caroline</a>
            <ul>
              <li>
                <a href="/">Event 1</a>
              </li>
              <li>
                <a href="/">Event 2</a>
              </li>
              <li>
                <a href="/">Event 3</a>
              </li>
            </ul>
          </li>
        </UL>
      </Layout>
    </div>
  )
}

export default Friends
