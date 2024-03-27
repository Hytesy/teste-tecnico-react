import { useEffect, useState } from "react"
import { getNames, getPokemon, getPokemonsPerType } from "../services/requestApi"
import { LoadLessPokemon, LoadMorePokemon } from "../components/pokemonQuantityButtons";
import TypesFilter from "../components/typesFilter";
import List from "../components/pokemonList";
import { Footer, Header } from "../components/HeadFooter";

const PokemonList = () => {
  const counter = 10
  const [pokemonList, setPokemonList] = useState()
  const [pokemonCount, setPokemonCount] = useState(counter)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      const listName = await getNames(pokemonCount)
      const pokemons = await getPokemon(listName)
      setPokemonList(pokemons)
    }
      fetchData()
 
  }, [pokemonCount])
  
  useEffect(() => {
    async function fetchFiltredData(type) {
      const listName = await getPokemonsPerType(type)
      const pokemons = await getPokemon(listName)
      setPokemonList(pokemons)
    }
    if (!filter) {
      fetchData()
    } else {
      fetchFiltredData(filter)
    }
  }, [filter])



  const loadMorePokemon = () => {
    setPokemonCount(prevCount => prevCount + counter)
  }
  const loadLessPokemon = () => {
    if (pokemonCount > counter) {
      setPokemonCount(prevCount => prevCount - counter)
    }
  }

  const handleFilerChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Header />
      <main>
        <TypesFilter value={filter} onChange={handleFilerChange} />
        <List pokemons={pokemonList} />
        <div>
          <LoadLessPokemon onClick={loadLessPokemon} />
          <LoadMorePokemon onClick={loadMorePokemon} />
        </div>
      </main>
      <Footer/>

    </>
  );
};

export default PokemonList
