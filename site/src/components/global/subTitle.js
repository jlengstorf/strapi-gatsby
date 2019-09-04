import React from "react"
import styled from "styled-components"
import { setColor } from "../../styles"

const SubTitle = ({ className, subTitle }) => {
  return (
    <div className={className}>
      <span>
        <i>{subTitle}</i>
      </span>
    </div>
  )
}

export default styled(SubTitle)`
  margin: 0 auto;
  display: block;
  padding: 0.25rem 0 1.75rem;
  text-align: center;
  width: 300px;

  span {
    position: relative;
    display: block;
    font-style: italic;
    color: ${setColor.mainGrey};
    width: 300px;

    &:before {
      content: "";
      border-bottom: 1px solid ${setColor.mainGrey};
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: 0;
    }
  }

  i {
    display: inline-block;
    padding: 0 1rem;
    background: ${setColor.White};
    position: relative;
    z-index: 2;
  }
`
