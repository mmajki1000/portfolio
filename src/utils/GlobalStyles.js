
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
   font-family: 'Raleway', sans-serif;
   font-size: 1.6rem;

}

    
`;

export default GlobalStyle;