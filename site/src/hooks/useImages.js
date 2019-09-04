import { graphql, useStaticQuery } from "gatsby"
import { get } from "lodash"

const useImages = () => {
  const query = graphql`
    query imageHome {
      allFile {
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
  const data = useStaticQuery(query)
  const images = get(data, "allFile.edges", []).reduce((acc, current) => {
    const {
      node: { name, publicURL, sharp },
    } = current

    acc[name] = {
      publicURL,
      fluid: sharp ? sharp : null,
    }

    return acc
  }, {})

  return images
}

export default useImages
