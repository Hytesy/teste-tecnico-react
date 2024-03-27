const LoadMorePokemon = ({onClick}) => {
    return (
        <button onClick={onClick}>Show More</button>
    )
}
const LoadLessPokemon = ({onClick}) => {
    return (
        <button onClick={onClick}>Show Less</button>
    )
}

export { LoadMorePokemon, LoadLessPokemon}