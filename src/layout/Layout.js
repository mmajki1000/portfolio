import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../utils/GlobalStyles';
import Theme from '../utils/Theme';

const Layout = ({children}) => {
    <ThemeProvider theme={Theme}>
        <>
        <GlobalStyles/>
        {children}

        </>
    </ThemeProvider>
}

export default Layout;