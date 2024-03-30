export default function mapPokemonData(pokemonData) {
  return pokemonData.map((data) => ({
    name: data.name,
    image: data.sprites?.other?.home?.front_default || "",
    order: data.order,
    type: data.types[0]?.type?.name || "",
  }));
}
