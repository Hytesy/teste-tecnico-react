import { Link } from "react-router-dom"
import { PokemonCard } from "../pokemonCard"
import { Ul } from "./styled"
import { useContext } from "react"
import { ThemeContext } from "../../themes/contextTheme"

const List = (props) => {
    const { theme } = useContext(ThemeContext)

    if (!props.isLoading) {
        return (
            <Ul theme={theme}>
                {props.pokemons?.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/poke/${pokemon.name}`}>
                            <PokemonCard
                                name={pokemon.name}
                                image={pokemon.sprites.other['official-artwork'].front_default ? pokemon.sprites.other['official-artwork'].front_default : `src/images/notFound.jpg`}
                                types={pokemon.types.map((types) => types.type.name)}
                            />
                        </Link>
                    </li>
                ))}
                {props.children}
            </Ul>
        )
    } else {
        return (
            <Ul theme={theme}>
                <li>
                    <h1>Carregando</h1>
                </li>
            </Ul>
        )
    }


}


export default List 