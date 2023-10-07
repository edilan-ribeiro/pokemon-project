import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
  }

  body {
    background-color: #000000c9; 
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  li{
    list-style-type: none;
   }

  a {
    text-decoration: none;
    color: inherit; /* PLACEHOLDER */
  }
`