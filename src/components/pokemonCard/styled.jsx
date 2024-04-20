import styled from "styled-components";

const Card = styled.div`
    color: ${({theme}) => theme.text};
    display:flex;
    padding:10px 0;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center; 
    font-size:10px;
    width:250px;
    height:400px;
    border-radius: 15px;
    background-color: ${props => props.$backgroundcolor};
    border: 4px solid ${props => props.$bordercolor};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`
const Image = styled.img`
    height:50%;
    transition: 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.7));
    border-radius: 10px;
    &:hover{
        transform: scale(1.1);
    }
`
const ListType = styled.ul`
    display:flex;
    padding-top:5px;
`
const Type = styled.li`
    font-size:12px;
    display:flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    color: #000000;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 30px;
    background-color: ${props => props.$backgroundcolor}; 
`

export { Card, Type, Image, ListType }