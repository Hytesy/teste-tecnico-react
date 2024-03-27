import axios from "axios";

async function getNames(Quantity) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${Quantity}&offset=0`)
        return response.data.results
    } catch (error) {

    }
}

async function getPokemon(listName) {
    try {
        const result = await Promise.all(listName.map(async (pokemon) => {
            const response = await axios.get(pokemon.url)
            return response.data
        }))
        return result
    } catch (error) {

    }
}

async function getCardDetails(nameOrId) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
        return response.data
    } catch (error) {

    }
}

async function getAbiltyInfo(pokemonDetails) {
    try {
        const result = await Promise.all(pokemonDetails.abilities?.map(async (abilityInfo) => {
            const response = await axios.get(abilityInfo.ability.url)
            return response.data
        }))
        return result
    } catch (error) {

    }
}

async function getPokemonsPerType(type) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        return response.data.pokemon.map(i => i.pokemon)
    } catch (error) {

    }
}

async function getTypes() {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`)
        return response.data.results
    } catch (error) {

    }
}


export {getNames, getPokemon, getCardDetails, getAbiltyInfo, getPokemonsPerType, getTypes}