import React from "react"
import styled from "styled-components"
import { setColor, setFontFamily } from "../../styles"

const Title = ({ className, title, center }) => {
  return <h1 className={className}>{title}</h1>
}

export default styled(Title)`
  text-transform: capitalize;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${setColor.mainBlack};
  padding-left: 2rem;
  padding-right: 2rem;
  ${setFontFamily.serif}
`
