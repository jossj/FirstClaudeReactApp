import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
