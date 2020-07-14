import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #1f4068;
    --white: #f0f0f5;
    --dark-blue: #162447;
    --deep-blue: #2D2D4E;
    --deep-black: #1b1b2f;
    --red: #e43f5a;
  }
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans JP', sans-serif;
    color: var(--deep-black);
  }
  
  a:link, a:visited {
    text-decoration: none;
    font-weight: bold;
    color: var(--deep-blue);
    transition: 250ms color ease;
  }
  
  a:hover, a:active {
    color: var(--red);
  }
`

export default GlobalStyle
