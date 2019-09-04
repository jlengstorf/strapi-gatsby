import React from "react"
import { get } from "lodash"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Article from "../components/global/article"
import Title from "../components/global/title"
import * as seedData from "../seedData"
import styled from "styled-components"
import { setFontFamily, setColor } from "../styles"

const UL = styled.ul`
  padding: 1rem;
  margin-top: 1rem;
  li > a {
    color: ${setColor.accentColor};
    font-size: 1.4rem;
    ${setFontFamily.main};
    padding: 2rem;
    margin-top: 1rem;
  }
`

const Event = ({ data, path, pageContext }) => {
  const slug = path.replace("/", "")
  const { previous, next } = pageContext

  const currentEvent = seedData.events.find(event => event.slug === slug)
  const fluid = get(
    data,
    ["allFile", "edges", "0", "node", "sharp", "fluid"],
    {}
  )

  return (
    <Layout>
      <div>
        <Article>
          <Image className="grid" fluid={fluid} />
          <div style={{ gridColumn: "1 / span 2" }}>
            <Title title={currentEvent.title} />
            <p>
              <strong>Posted By:</strong> {currentEvent.author}
            </p>
            <h2>Important Information:</h2>
            <div>
              <div>
                <strong>Dinner Date</strong> <br />
                {currentEvent.information.dinnerDate}
              </div>
              <div>
                <strong>Location</strong> <br />
                {currentEvent.information.location}
              </div>
              <div>
                <strong>Address</strong> <br />
                {currentEvent.information.address}
              </div>
              <div>
                <strong>Google Map</strong> <br />
                <a href="{currentEvent.information.googleMap}">Directions</a>
              </div>
              <div>
                <strong>Time</strong> <br />
                {currentEvent.information.time}
              </div>
            </div>
            <h2>Details:</h2>
            <div>{currentEvent.details}</div>
          </div>
        </Article>
        <nav>
          <UL
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </UL>
        </nav>
      </div>
    </Layout>
  )
}

export default Event

export const pageQuery = graphql`
  query imageHom($slug: String!) {
    allFile(filter: { name: { eq: $slug } }) {
      edges {
        node {
          publicURL
          name
          sharp: childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
