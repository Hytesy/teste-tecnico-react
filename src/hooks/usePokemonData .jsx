import { useState, useEffect } from "react";
import { getPokemonUrl } from "../services/requestApi";
import { getFilteredPokemon } from "../services/requestApi";
import mapPokemonData from "../utils/mapPokemonData";

// poderia tambem separar a logica desse hook em outros hooks menores, como por exemplo um hook para buscar os pokemons, outro para filtrar os pokemons, outro para carregar mais pokemons, etc

const usePokemonData = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [typeSelected, setTypeSelected] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  const fetchData = async (type, offset) => {
    try {
      const pokemonData = type
        ? await getFilteredPokemon(type)
        : await getPokemonUrl(offset);
      // aqui uma dica para mapear um novo array de pokemons com as informações que você deseja, só modificar o mapPokemonData
      const newPokemon = mapPokemonData(pokemonData);
      return newPokemon;
    } catch (error) {
      console.error("Erro ao buscar pokemons:", error);
    }
  };

  useEffect(() => {
    fetchData(null, offset).then((newPokemon) => {
      setPokemons(newPokemon);
      setPokemonsFiltered(newPokemon);
      setDataLoaded(true);
    });
  }, [offset]);

  const selectType = (type) => {
    setTypeSelected(type);
  };

  useEffect(() => {
    if (typeSelected === "") {
      setPokemonsFiltered(pokemons);
    } else {
      fetchData(typeSelected).then((newPokemon) => {
        setPokemonsFiltered(newPokemon);
        setDataLoaded(true);
      });
    }
  }, [typeSelected, pokemons]);

  const loadMorePokemons = async () => {
    const newOffset = offset + 10;
    const newPokemon = await fetchData(typeSelected, newOffset);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemon]);
    setOffset(newOffset);
    setPokemonsFiltered((prevPokemonsFiltered) => [
      ...prevPokemonsFiltered,
      ...newPokemon,
    ]);
  };

  return { pokemonsFiltered, loadMorePokemons, selectType };
};

export default usePokemonData;
