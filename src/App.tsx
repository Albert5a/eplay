import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { Way } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <Way />
    </BrowserRouter>
  )
}

export default App
