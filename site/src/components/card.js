import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import SubTitle from "./global/subTitle"
import ReadMoreLink from "./global/readMoreLink"
import { setFontFamily, setColor } from "../styles"

const P = styled.p`
  padding: 1rem;
  ${setFontFamily.main}
`

const Img = styled(Image)`
  height: 200px;
  margin-top: 1rem;
`

const H3 = styled.h3`
  height: 2rem;
`

const Card = ({ details, dinnerDate, isMainEvent, slug, title, image }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid" + setColor.accentColor,
        paddingBottom: "2rem",
      }}
      className={isMainEvent ? "grid" : ""}
    >
      <H3>
        <Link to={slug}>{title}</Link>
      </H3>
      {isMainEvent && <SubTitle subTitle="Next Food Event" />}
      <Img fluid={image} />
      {isMainEvent && (
        <P>
          <strong>Next Event Date: </strong>
          {dinnerDate}
        </P>
      )}
      <P>{details.substring(0, 150) + "..."}</P>
      <ReadMoreLink to={slug}>
        {isMainEvent ? "All Information" : "Read More"} &rarr;
      </ReadMoreLink>
    </div>
  )
}

export default styled(Card)`
  align-self: center;
  border: 1px solid ${setColor.accentColor};
`
