import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";


const StyledNav = styled.nav `
position: fixed;
display: flex;
align-items: center;
top: 0;
justify-content: space-around;
width: 100%;
height: 60px;
background-color: aqua;
z-index: 9999;
`
const NavLinksContainer = styled.div`
display: inline-block;
`

const Links = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
` 

export const Nav = () => (
    <StyledNav>
        <p>LOGO</p>
        <NavLinksContainer>
                <Links as={Link} to="/about">About</Links>
                <Links as={Link} to="/work">Work</Links>
        </NavLinksContainer>
    </StyledNav>
)
