import './App.css'
import Header from './Componetns/Header'
import Footer from './Componetns/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Portfolio from './Pages/Portfolio'

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/Portfolio' element={<Portfolio/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App