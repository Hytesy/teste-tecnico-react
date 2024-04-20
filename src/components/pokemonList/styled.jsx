import styled from "styled-components";

const Ul = styled.ul`
    border: solid 2px ${({theme}) => theme.panelBorder};
    border-radius:20px;
    display:flex;
    width: 95vw;
    flex-wrap:wrap;
    justify-content:space-evenly;
    padding:20px 0;
    gap:20px 0;
    background:${({theme}) => theme.background};
    backdrop-filter: blur(10px);
`

export { Ul }