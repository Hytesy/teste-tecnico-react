import { Link } from "react-router-dom"
import { PokemonCard } from "../pokemonCard"
import { Ul } from "./styled"

const List = (props) => (
    <Ul>
        {props.pokemons?.map((pokemon, index) => (
            <Link key={index} to={`/poke/${pokemon.name}`}>
                <PokemonCard
                    key={index}
                    name={pokemon.name}
                    image={pokemon.sprites.other['official-artwork'].front_default ? pokemon.sprites.other['official-artwork'].front_default : `src/images/notFound.jpg`}
                    types={pokemon.types.map((types) => types.type.name)}
                />
            </Link>
        ))}
    </Ul>
)


export default List 