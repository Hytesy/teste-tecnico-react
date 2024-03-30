import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2';

async function fetchPokemonData(url) {
  try {

    const response = await axios.get(url);
    const { results } = response.data;
    const urlPokemon = results.map((result) => result.url);

    const pokemonData = await Promise.all(
      urlPokemon.map((url) =>
        axios.get(url).then((response) => response.data)
      )
    );

    return pokemonData;
  } catch (error) {
    console.error("Erro ao obter lista de URLs de Pokémon:", error);
    return [];
  }
}

async function getNames(Quantity) {
  try {
    const response = await fetchPokemonData(
      `${BASE_URL}/pokemon?limit=${Quantity}&offset=0`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getPokemon(listName) {
  try {
    const result = await Promise.all(
      listName.map(async (pokemon) => {
        const response = await fetchPokemonData(pokemon.url);
        return response.data;
      })
    );
    return result;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getPokemonUrl(offset) {
  try {
    const response = await fetchPokemonData(
      `${BASE_URL}/pokemon/?limit=10&offset=${offset}`
    );

    return response;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
    return [];
  }
}

async function getCardDetails(nameOrId) {
  try {
    const response = await fetchPokemonData(
      `${BASE_URL}/pokemon/${nameOrId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getAbiltyInfo(pokemonDetails) {
  try {
    const result = await Promise.all(
      pokemonDetails.abilities?.map(async (abilityInfo) => {
        const response = await fetchPokemonData(abilityInfo.ability.url);
        return response.data;
      })
    );
    return result;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getPokemonsPerType(type) {
  try {
    const response = await fetchPokemonData(`${BASE_URL}/type/${type}`);
    return response.data.pokemon.map((i) => i.pokemon);
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getTypes() {
  try {
    const response = await axios.get(`${BASE_URL}/type`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar pokemons:", error);
  }
}

async function getFilteredPokemon(tipoSelecionado, offset = 10){
    try {
      const response = await axios.get(
        `${BASE_URL}/type/${tipoSelecionado}?limit=10?offset=${offset}`
      );
      const { pokemon } = response.data;
      const urlPokemon = pokemon.map((result) => result.pokemon.url);
  
      const pokemonData = await Promise.all(
        urlPokemon.map((url) =>
          axios.get(url).then((response) => response.data)
        )
      );
  
      return pokemonData;
    } catch (error) {
      console.error("Erro ao buscar os pokemons por tipo:", error);
      return [];
    }
  }
        

export {
  getNames,
  getPokemon,
  getCardDetails,
  getAbiltyInfo,
  getPokemonsPerType,
  getTypes,
  getPokemonUrl,
  getFilteredPokemon
};
