import { useContext } from "react";
import { Card, Image, ListType, Type } from "./styled"
import { ThemeContext } from "../../themes/contextTheme";
const opacity = 0.75
const typeColors = {
    water: { card: `rgba(104, 144, 240, ${opacity})`, type: '#6890f0' },
    fire: { card: `rgba(240, 80, 48, ${opacity})`, type: '#f05030' },
    grass: { card: `rgba(120, 200, 80, ${opacity})`, type: '#78c850' },
    electric: { card: `rgba(248, 208, 48, ${opacity})`, type: '#f8d030' },
    psychic: { card: `rgba(248, 88, 136, ${opacity})`, type: '#f85888' },
    fighting: { card: `rgba(144, 48, 40, ${opacity})`, type: '#903028' },
    flying: { card: `rgba(168, 144, 240, ${opacity})`, type: '#a890f0' },
    poison: { card: `rgba(160, 64, 160, ${opacity})`, type: '#a040a0' },
    ground: { card: `rgba(224, 192, 104, ${opacity})`, type: '#e0c068' },
    rock: { card: `rgba(184, 160, 56, ${opacity})`, type: '#b8a038' },
    ghost: { card: `rgba(112, 88, 152, ${opacity})`, type: '#705898' },
    steel: { card: `rgba(184, 184, 208, ${opacity})`, type: '#b8b8d0' },
    bug: { card: `rgba(168, 184, 32, ${opacity})`, type: '#a8b820' },
    ice: { card: `rgba(152, 216, 216, ${opacity})`, type: '#98d8d8' },
    dragon: { card: `rgba(112, 56, 248, ${opacity})`, type: '#7038f8' },
    dark: { card: `rgba(49, 27, 146, ${opacity})`, type: '#311B92' },
    normal: { card: `rgba(97, 97, 97, ${opacity})`, type: '#616161' },
    fairy: { card: `rgba(234, 128, 252, ${opacity})`, type: '#e48ff2' }
};

const PokemonCard = ({ name, image, types }) => {
    const pokemonType = types.length > 0 ? types[0] : ''

    const backgroundCard = typeColors[pokemonType].card || 'gray'

    const { theme } = useContext(ThemeContext)

    return (
        <Card theme={theme} $backgroundcolor={backgroundCard} $bordercolor={typeColors[pokemonType].type}>
            <h1>{name}</h1>
            <Image srcSet={image ? image : '../src/images/notFound.jpg'} />
            <h2>types</h2>
            <ListType>
                {types.map((type, index) => {
                    return <Type $backgroundcolor={typeColors[type].type} key={index}>{type}</Type>
                })}
            </ListType>
        </Card>
    )
}

export { PokemonCard }

