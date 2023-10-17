import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { Way } from './routes'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <Way />
      <Footer />
    </BrowserRouter>
  )
}

export default App
