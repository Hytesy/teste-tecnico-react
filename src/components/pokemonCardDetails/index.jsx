import { Link, useParams } from "react-router-dom"
import { getAbiltyInfo, getCardDetails } from "../../services/requestApi"
import { useEffect, useState } from "react"

const PokemonCardDetails = () => {
    const { nameOrId } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState({})
    const [pokemonAbility, setPokemonAbility] = useState([])
    const moves = pokemonDetails.moves
    const types = pokemonDetails.types
    const image = pokemonDetails.sprites?.other['official-artwork'].front_default

    useEffect(() => {
        async function fetchData() {
            const details = await getCardDetails(nameOrId)
            const abilityInfo = await getAbiltyInfo(details)
            setPokemonDetails(details)
            setPokemonAbility(abilityInfo)
        }
        fetchData()
    }, [])

    return (
        <main>
            <Link to={`/`}>Voltar</Link>
            <img srcSet={image} />
            <h1>{pokemonDetails.name}</h1>
            <h2>moves</h2>
            <ul>
                {moves?.map((moves, index) => {
                    return <li key={index}>{moves.move.name}</li>
                })}
            </ul>
            <h1>abilities</h1>
            <ul>
                {pokemonAbility?.map((abilities, index) => {
                    return (
                        <li key={index}>
                            <h3>{abilities.name}</h3>
                            <p>{abilities.flavor_text_entries[abilities.flavor_text_entries.length - 1].flavor_text}</p>
                        </li>
                    )
                })}
            </ul>
            <h2>types</h2>
            <ul>{types?.map((types, index) => {
                return <li key={index}>{types.type.name}</li>
            })}</ul>
        </main>
    )
}

export default PokemonCardDetails
