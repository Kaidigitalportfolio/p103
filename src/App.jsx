import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SkiHillsPage from './pages/SkiHillsPage'
import SkiHillMapPage from './pages/SkiHillMapPage'

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ski-hills" element={<SkiHillsPage />} />
        <Route path="/ski-hill-map" element={<SkiHillMapPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
