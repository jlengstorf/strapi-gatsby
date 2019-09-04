import React from "react"
import { Link } from "gatsby"
import { elastic as Menu } from "react-burger-menu"
import { menuItems } from "../seedData"
import { createGlobalStyle } from "styled-components"
import { setColor, setFontFamily } from "../styles"

const GlobalStyle = createGlobalStyle`
  /* Position and sizing of burger button */
  .bm-burger-button {
    display: block;
    position: fixed;
    width: 32px;
    height: 28px;
    right: 36px;
    top: 36px;

  @media (min-width: 768px) {
    display: none;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${setColor.mainBlack};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${setColor.accentColor};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${setColor.mainBlack};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${setColor.offWhite};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${setColor.offWhite};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: ${setColor.mainBlack};
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    ${setFontFamily.main}
    text-transform: uppercase;
    text-decoration: none;
    padding: .5rem 0;
  }

  .bm-item:hover, .bm-item:active {
    color: ${setColor.accentColor}
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.6);
  }
`

const menu = menuItems.map(item => (
  <Link key={item.id} to={`${item.link}/`}>
    {item.name}
  </Link>
))

export default props => {
  return (
    <>
      <GlobalStyle />
      <Menu {...props} pageWrapId={"page-wrap"}>
        {menu}
      </Menu>
    </>
  )
}
