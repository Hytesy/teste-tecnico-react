import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonList from "./PokemonList"
import PokemonDetail from "./PokemonDetail"

const AppRoutes = () => (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<PokemonList/>} />
                    <Route exact path='/poke/:nameOrId' element={<PokemonDetail/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

export default AppRoutes 