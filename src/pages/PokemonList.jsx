import { useContext, useEffect, useState } from "react"
import { getNames, getPokemon, getPokemonsPerType } from "../services/requestApi"
import { LoadLessPokemon, LoadMorePokemon } from "../components/pokemonQuantityButtons";
import TypesFilter from "../components/typesFilter";
import List from "../components/pokemonList";
import { Footer, Header } from "../components/HeadFooter";
import { ButtonsMoreLess, Page } from "./PageStyled";
import { ThemeContext } from "../themes/contextTheme";

const PokemonList = () => {
  const counter = 10
  const [pokemonList, setPokemonList] = useState()
  const [pokemonCount, setPokemonCount] = useState(counter)
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const listName = await getNames(pokemonCount)
        const pokemons = await getPokemon(listName)
        setPokemonList(pokemons)
      } catch (error) {
        console.error("Erro ao buscar dados", error)
      } finally {
        setLoading(false)
      }
    }
    async function fetchFiltredData(type) {
      setLoading(true)
      try {
        const listName = await getPokemonsPerType(type)
        const pokemons = await getPokemon(listName)
        setPokemonList(pokemons)
      } catch (error) {
        console.error("Erro ao buscar dados filtrados", error)
      } finally {
        setLoading(false)
      }
    }
    if (!filter) {
      fetchData()
    } else {
      fetchFiltredData(filter)
    }

  }, [pokemonCount, filter])

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
    <Page theme={theme}>
      <Header />
      <main>
        <TypesFilter value={filter} onChange={handleFilerChange} />
        <List pokemons={pokemonList} isLoading={loading}>
          <ButtonsMoreLess>
            <LoadLessPokemon onClick={loadLessPokemon} />
            <LoadMorePokemon onClick={loadMorePokemon} />
          </ButtonsMoreLess>
        </List>
      </main>
      <Footer />
    </Page>
  );
};

export default PokemonList
