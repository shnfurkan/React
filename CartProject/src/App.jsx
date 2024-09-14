import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import CartList from "./components/cartList"

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cartList" element={<CartList/>}/>
    </Routes>

    </div>
  )
}

export default App