import React from "react"
import Bio from "./bio"
import NewsletterSignup from "./newsletterSignup"
import RecentEvents from "./recentEvents"
import Instagram from "./instagram"
import SocialMedia from "./socialMedia"
import styled from "styled-components"
import { themeAside } from "../styles"
import { ThemeProvider } from "styled-components"

const AsideHTML = styled.aside`
  max-width: 350px;
`

const Aside = () => {
  return (
    <AsideHTML>
      <Bio />
      <NewsletterSignup />
      <RecentEvents />
      <ThemeProvider theme={themeAside}>
        <Instagram />
      </ThemeProvider>
      <SocialMedia />
    </AsideHTML>
  )
}

export default Aside
