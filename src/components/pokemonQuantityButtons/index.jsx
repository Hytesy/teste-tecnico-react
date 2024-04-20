import { useContext } from "react"
import { Button } from "./styled"
import { ThemeContext } from "../../themes/contextTheme"

const LoadMorePokemon = ({onClick}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button theme={ theme } onClick={onClick}>Show More</Button>
    )
}
const LoadLessPokemon = ({onClick}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button theme={ theme }onClick={onClick}>Show Less</Button>
    )
}

export { LoadMorePokemon, LoadLessPokemon}