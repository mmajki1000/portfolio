import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//import GlobalStyle from '../utils/GlobalStyles';
import {theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat';
        color: blue;
        background-color: pink;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }   
`;

const Layout = ({children}) => {
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
            {children}

        </>
    </ThemeProvider>
}

export default Layout;