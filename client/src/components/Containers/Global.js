import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');;
  
  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
  }
`

export default Global;