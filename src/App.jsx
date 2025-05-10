import './css/App.css'
import { Routes,Route } from 'react-router-dom'
import Home  from './pages/home'
import Favorites from './pages/favourite'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/MovieContext'
function App() {
  return (
    <MovieProvider>
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
