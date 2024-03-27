import React, { useState } from "react";
import {
  LoadLessPokemon,
  LoadMorePokemon,
} from "../components/pokemonQuantityButtons";
import TypesFilter from "../components/typesFilter";
import List from "../components/pokemonList";
import { Footer, Header } from "../components/HeadFooter";
import usePokemonData from "../hooks/usePokemonData ";

const PokemonList = () => {
  const [typeSelected, setTypeSelected] = useState("");
  const { pokemonsFiltered, loadMorePokemons, selectType } = usePokemonData();

  console.log(pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemonsFiltered);

  const handleFilerChange = (type) => {
    selectType(type);
    setTypeSelected(type);
  };

  return (
    <>
      <Header />
      <main>
        <TypesFilter value={typeSelected} onChange={handleFilerChange} />
        {/* <List
          pokemons={pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemons}
        /> */}
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
