import React, { useState, useCallback } from "react";
import {
  LoadLessPokemon,
  LoadMorePokemon,
} from "../components/pokemonQuantityButtons";
import TypesFilter from "../components/typesFilter";
import List from "../components/pokemonList";
import { Footer, Header } from "../components/HeadFooter";
import usePokemonData from "../hooks/usePokemonData ";

const PokemonList = () => {
  // console.log("Renderizando PokemonList"); // Adicione esta linha
  const { pokemonsFiltered, loadMorePokemons, selectType } = usePokemonData();

  const handleFilerChange = useCallback(
    (tipo) => {
      selectType(tipo);
    },
    [selectType]
  );

  //OLHA O CONSOLE
  console.log("pokemonsFiltered", pokemonsFiltered);

  return (
    <>
      <Header />
      <main>
        <TypesFilter handleFilerChange={handleFilerChange}/> */}
        <List
          pokemons={pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemons}
        /> 
        <div>
          <LoadLessPokemon onClick={loadMorePokemons} />
          <LoadMorePokemon onClick={loadMorePokemons} />
        </div> 
      </main>
      <Footer />
    </>
  );
};

export default PokemonList;
