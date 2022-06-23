import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import GlobalStyle from './theme/globalStyles'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
