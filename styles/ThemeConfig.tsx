import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  body {
    background: #f2f2f2;
    color: #020202;
    font-family: 'Nunito', sans-serif;
    transition: all 0.50s linear;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`