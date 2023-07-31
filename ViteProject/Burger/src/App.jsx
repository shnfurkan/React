import './App.css'
import {Route,Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Menü' element={<Menu/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App

