import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WantedPage from './components/wanted-page'

function App () {

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<WantedPage/>} />
      <Route path="/art-crimes" element = {<h1>Art Crimes</h1>} />
  </ Routes >
  </ BrowserRouter >
  )
}

export default App