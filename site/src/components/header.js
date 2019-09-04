import React from "react"
import styled from "styled-components"
import { RowMenu } from "../components/menu"
import Logo from "../components/global/logo"
import { menuItems } from "../seedData"
import { setColor, setFontFamily, setFontSize } from "../styles"
import { sloganWords } from "../seedData"
import MobileMenu from "../components/mobileMenu"
import GlobalStyles from "../components/global/GlobalStyles"

const HeaderHTML = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${setColor.accentColor};
  padding: 1rem 0;
`
const P = styled.p`
  ${setFontFamily.main};
  ${setFontSize.larger};
  color: ${setColor.mainBlack};
  font-weight: normal;
  width: 250px;
  text-align: center;
`

const Header = () => {
  return (
    <>
      <GlobalStyles />
      <MobileMenu right menuItems={menuItems} />
      <HeaderHTML>
        <Logo />
        <P> {sloganWords}</P>
      </HeaderHTML>
      <RowMenu menuItems={menuItems} center />
    </>
  )
}

export default Header
