import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        
        width: 100%;
        min-height: 100vh;

        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
        font-family: sans-serif;
    }

`;