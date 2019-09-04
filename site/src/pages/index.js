import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"
import Title from "../components/global/title"
import Article from "../components/global/article"
import Card from "../components/card"

export const query = graphql`
  {
    events: allStrapiEvents(sort: { fields: dinnerDate, order: DESC }) {
      nodes {
        id
        slug
        title
        details
        dinnerDate
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout topComponent={ImageSlider}>
      <div>
        <Title center title="Food with Friends" />
        <Article>
          {data.events.nodes.map((event, index) => (
            <Card
              key={event.id}
              image={event.image.childImageSharp.fluid}
              dinnerDate={event.dinnerDate}
              details={event.details}
              title={event.title}
              slug={event.slug}
              isMainEvent={index === 0}
            />
          ))}
        </Article>
      </div>
    </Layout>
  )
}

export default IndexPage
