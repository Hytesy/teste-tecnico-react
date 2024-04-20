import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../src/themes/contextTheme";

const Style = createGlobalStyle`
    #root {
        background: url(../${({theme}) => theme.backgroundImage}) no-repeat; 
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }
    h1, h2, h3, li {
        text-transform: capitalize;
    }
`

const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Style theme={theme} />
    )
}

export { GlobalStyle }