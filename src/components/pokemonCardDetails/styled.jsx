import styled from "styled-components";

const DetailsSection = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    justify-content: space-evenly;
    gap: 5px;
   
`
const GeneralSection = styled.div`
    display: flex;
    height: fit-content;
    flex-direction: column;
    border: 1px solid white;
    align-items: center;
    & > img {
        width: 70%;
        border-radius: 15px;
    }
`

const MovesSection = styled.ul`
    height: 250px;
    padding: 10px;
    min-width: 200px;
    overflow-Y: scroll;
`
const AbilitiesSection = styled.ul`
    height: 200px;
    padding: 10px;
`
const TypesSection = styled.ul`
    display: flex;
    & > li {
        padding: 5px
    };
`

export { DetailsSection, GeneralSection, MovesSection, AbilitiesSection, TypesSection }