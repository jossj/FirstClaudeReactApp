import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'
import Fourth from './pages/Fourth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
