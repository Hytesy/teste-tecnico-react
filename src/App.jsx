
import { GlobalStyle } from "../styles/globalStyle"
import AppRoutes from "./pages/routes"
import { ThemeProvider } from "./themes/contextTheme"

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
