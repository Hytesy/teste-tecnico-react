import { createContext, useState } from "react";

const themes = {
    light: {
        backgroundImage: 'src/images/BgDay.jpg',
        background: 'rgba(240, 240, 240, 0.5)',
        panelBorder: 'rgba(240, 240, 240, 0.5)',
        panelShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        backgroundButton:'#EEEEEE',
        borderButton:'#313131',
        text: '#000000'

    },
    dark: {
        backgroundImage: 'src/images/BgNight.jpg',
        background: 'rgba(66, 66, 66, 0.6)',
        panelBorder: '#383837',
        backgroundButton:'#323232',
        borderButton:'#E2E2E2',
        text: '#F5F5F5'
    }
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, themes, ThemeProvider }