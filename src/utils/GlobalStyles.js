
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding:0;
        margin: 0;
        font-family: 'Montserrat';
        color: white;
        background: blue;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    
`;

export default GlobalStyle;