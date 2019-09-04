import styled from "styled-components"
import { Link } from "gatsby"
import { setColor } from "../../styles"

const ReadMoreLink = styled(Link)`
  text-align: left;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 60%;

  :link,
  :visited {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: ${setColor.primaryColor};
    text-decoration: none;
  }

  :hover,
  :active {
    color: ${setColor.mainGrey};
  }
`

export default ReadMoreLink
