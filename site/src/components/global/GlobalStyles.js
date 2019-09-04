import { createGlobalStyle } from "styled-components"
import { setColor } from "../../styles"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body, html {
        padding: 0;
        margin: 0;
        color: ${setColor.mainBlack};;
    }
    body {
    }
    /* remove margin for main div that gatsby mounts into */

    > div {
        margin-top: 0;
    }

    a {
    color: ${setColor.primaryColor};;
    }

    a:hover, a:focus {
    color: ${setColor.mainGrey};;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${setColor.mainBlack};;

    }

    h1 > a:link, h2 > a:link, h3 > a:link, h4 > a:link, h5 > a:link, h6 > a:link,
    h1 > a:visited, h2 > a:visited, h3 > a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
      color: ${setColor.primaryColor};;
      text-decoration: none;
    }

    h1 > a:hover, h2 > a:hover, h3 > a:hover, h4 > a:hover, h5 > a:hover, h6 > a:hover,
    h1 > a:active, h2 > a:active, h3 > a:active, h4 a:active, h5 a:active, h6 a:active {
      color: ${setColor.mainGrey};;
    }


    strong {
        color: ${setColor.mainBlack};;
    }

    ul {
      margin: 0;
      padding: 0;
    }
    
    li {
      a {
        text-decoration: none;
      }
    }
`
export default GlobalStyle
