import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
//import GlobalStyle from '../utils/GlobalStyles';
import {theme} from '../utils/theme';

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

const StyledWrapper = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: start;
    position: relative;
    max-width: 1200px;
`;

 const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
        <StyledWrapper>
            {children}
        </StyledWrapper>
        </>
    </ThemeProvider>
     
 )

export default Layout;