import React, { useState, useEffect, useCallback } from "react";
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

  // console.log('usePokemonData chamado'); // Adicione esta linha

  const fetchData = useCallback(async (type, offset) => {
    try {
      const pokemonData = type
        ? await getFilteredPokemon(type, offset)
        : await getPokemonUrl(offset);
      // aqui uma dica para mapear um novo array de pokemons com as informações que você deseja, só modificar o mapPokemonData
      const newPokemon = mapPokemonData(pokemonData);
      return newPokemon;
    } catch (error) {
      console.error("Erro ao buscar pokemons:", error);
    }
  },[]);

  useEffect(() => {
    let isActive = true;

    // console.log('useEffect em usePokemonData chamado');
    fetchData(null, offset).then((newPokemon) => {
      setPokemons(newPokemon);
      setPokemonsFiltered(newPokemon);
      setDataLoaded(true);
    });
    return () => {
      isActive = false;
    };
  }, [fetchData, offset]);

  const selectType = useCallback((type) => {
    // console.log('selectType chamado com', type);
    setTypeSelected(type);
  }, []); // Dependências podem ser adicionadas se necessário

  useEffect(() => {
    let isActive = true;

    // console.log('useEffect com dependência de tipo em usePokemonData chamado');
    if (typeSelected === "") {
      setPokemonsFiltered(pokemons);
    } else {
      fetchData(typeSelected, offset).then((newPokemon) => {
        setPokemonsFiltered(newPokemon);
        setDataLoaded(true);
      });
    }
    return () => {
      isActive = false;
    };
  }, [typeSelected, fetchData, offset]);

  const loadMorePokemons = useCallback(async () => {
    const newOffset = offset + 10;
    const newPokemon = await fetchData(typeSelected, newOffset);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemon]);
    setOffset(newOffset);
    setPokemonsFiltered((prevPokemonsFiltered) => [
      ...prevPokemonsFiltered,
      ...newPokemon,
    ]);
  }, [typeSelected, offset, fetchData]); // Adicione as dependências necessárias aqui

  

  return { pokemonsFiltered, loadMorePokemons, selectType };
};

export default usePokemonData;
