import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Raleway', sans-serif;
    }

    input,
    button {
        background-color: transparent;
        outline: none;
        border: none;
    }

`;

export default GlobalStyles;
