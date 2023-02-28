import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalStyle from '../utils/GlobalStyles';
import {theme} from '../utils/theme';
import {Nav} from '../components/Nav';




const StyledWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`;

 const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
        <Nav />
 
            <main>{children}</main>
       
        </>
    </ThemeProvider>
     
 )

export default Layout;