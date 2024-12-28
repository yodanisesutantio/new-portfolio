import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="w-full h-dvh bg-[#010400]">
      <Router>
        <Navbar />

        <div>
          <h1 className="text-3xl font-mclaren font-bold text-center text-white">
              Hello world!
          </h1>
        </div>
      </Router>
    </main>
  )
}

export default App