import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { setColor, setFontFamily } from "../styles"

const Menu = ({ className, menuItems, center }) => {
  const menuLiItems = menuItems.map(item => (
    <li key={item.id}>
      <Link
        activeStyle={{ color: `${setColor.accentColor}` }}
        to={`${item.link}/`}
      >
        {item.name}
      </Link>
    </li>
  ))
  return <ul className={className}>{menuLiItems}</ul>
}

const MenuWrapper = styled(Menu)`
  display: none;
  padding: 0;

  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding: 0.75rem 1rem 0.75rem;
  }

  a {
    color: ${setColor.mainBlack};
    text-transform: uppercase;
    text-decoration: none;
    ${setFontFamily.main};
  }

  a:hover,
  a:active {
    color: ${setColor.accentColor};
  }

  a:focus {
    color: ${setColor.accentColor};
    border: 1px solid blue;
  }
`

export const ColumnMenu = styled(MenuWrapper)`
  flex-direction: column;
`

export const RowMenu = styled(MenuWrapper)`
  flex-direction: row;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
`
