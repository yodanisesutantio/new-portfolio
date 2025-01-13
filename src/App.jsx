import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Resume from './pages/Resume'

const App = () => {
  return (
    <main className="w-full h-dvh flex flex-col bg-[#010400]">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} /> {/* Main or Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/projects" element={<Projects />} /> {/* About page */}
          <Route path="/resume" element={<Resume />} /> {/* Access Resume */}
        </Routes>

        <Footer />
      </Router>
    </main>
  )
}

export default App