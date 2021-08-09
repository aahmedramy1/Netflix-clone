import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-something: antialiased;
        -moz-osx-font-something: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }
`;