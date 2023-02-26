import styled from "styled-components"

const Button = styled.button`
    height: 50px;
    width: 100px;
    color: ${({theme}) => theme.colors.primary } ;
    background-color: ${({theme}) => theme.colors.primary } ;
    background-color: red;

`

export default Button;


