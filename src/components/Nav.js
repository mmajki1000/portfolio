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
height: 5em;
border-bottom: 1px solid black;
//background-color: aqua;
z-index: 9999;
`
const NavLinksContainer = styled.div`
display: inline-block;
`

const Links = styled(Link)`
    margin: 0 10px;
    color: black;
    text-decoration: none;
` 

export const Nav = () => (
    <StyledNav>
        <p>Michał Ropelewski</p>
        <NavLinksContainer>
                <Links as={Link} to="/">home</Links>
                <Links as={Link} to="/work">work</Links>
                <Links as={Link} to="/about">about</Links>
                <Links as={Link} to="/contact">contact</Links>
        </NavLinksContainer>
    </StyledNav>
)
