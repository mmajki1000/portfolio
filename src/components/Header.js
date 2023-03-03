import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    //position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 30px;
    width: 100%;
    height: 100vh;
    background-color: grey;
`

const LeftSide = styled.div`
    background-color: black;
    grid-column: 2/4;
    grid-row: 3/5;
    z-index: 4;
`

const RightSide = styled.div`
    background-color: black;
    grid-column: 4/6;
    grid-row: 2/6;
    z-index: 4;
`

export const Header = () => (
    <StyledHeader>
        <LeftSide/>
        <RightSide />
    </StyledHeader>
)