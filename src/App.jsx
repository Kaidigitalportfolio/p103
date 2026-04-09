import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SkiHillsPage from './pages/SkiHillsPage'

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ski-hills" element={<SkiHillsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App