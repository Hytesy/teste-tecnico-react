import styled from "styled-components";

const Card = styled.div`
padding: 20px;
border: 1px solid #ccc;
border-radius: 15px;
background-color: ${props => props.$backgroundcolor};
`

const Type = styled.li`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    color:black;
    padding: 5px 10px;
    border-radius: 30px;
    background-color: ${props => props.$backgroundcolor};
`

export { Card, Type}