import styled from "styled-components";

const Button = styled.button`
    color:${props => props.theme.text};
    padding: 10px 15px;
    border-radius: 10px;
    border:none;
    background-color:${props => props.theme.backgroundButton};
    &:hover{
        cursor: pointer;
        border: 2px solid ${props => props.theme.borderButton};
    };
`

export { Button }
