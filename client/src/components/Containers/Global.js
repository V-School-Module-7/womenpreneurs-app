import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  
  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
  }
`

export default Global;