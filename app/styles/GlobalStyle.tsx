import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {    
        background-color: #2F2E41;
        font-family: 'Open Sans', sans-serif;     
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
  

    
`;
export default GlobalStyle;
