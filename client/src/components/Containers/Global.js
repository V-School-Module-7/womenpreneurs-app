import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  
  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

export default Global;