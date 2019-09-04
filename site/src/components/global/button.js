import styled from "styled-components"
import { setColor, setFontFamily, setTransition } from "../../styles"

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 0.25rem 0;
  background-color: ${setColor.accentColor};
  color: ${setColor.offWhite};
  text-transform: capitalize;
  padding: 0.25em 1em;
  font-size: 1rem;
  ${setFontFamily.main};
  border: 1px solid ${setColor.accentColor};
  border-radius: 0;
  &:hover {
    background: ${setColor.mainGrey};
    ${setTransition()};
  }
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem 0;
`

export default Button
