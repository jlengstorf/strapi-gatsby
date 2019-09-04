import React from "react"
import { setColor, setFontFamily } from "../styles"
import styled from "styled-components"
import { events } from "../seedData"
import { Link } from "gatsby"

const Section = styled.section`
  padding: 1rem;
  border: 1px solid ${setColor.accentColor};
  margin-bottom: 2rem;

  a {
    color: ${setColor.accentColor};
    text-decoration: none;
    ${setFontFamily.main};
  }
  h3 {
    font-size: 1.5rem;
    ${setFontFamily.serif};
    font-weight: bold;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 0.25rem;
  }
`

const RecentEvents = () => {
  return (
    <Section>
      <h3>Recent Events</h3>
      <ul>
        {events.slice(0, 5).map(event => (
          <li key={event.id}>
            <Link to={event.slug}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default RecentEvents
