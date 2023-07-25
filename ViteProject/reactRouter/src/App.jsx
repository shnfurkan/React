import AboutUs from '../components/AboutUs'
import Home from '../components/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/Navbar'
import Error from '../components/Error'
import Mission from '../components/Mission'
import History from '../components/History'
import Team from '../components/Team'
import Company from '../components/Company'
import Members from '../components/Members'
import MembersDetail from '../components/MembersDetail'

function App() {
  return (
    <div>
      <NavBar/> <br></br>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Mission' element={<Mission/>}/>
        <Route path='/History' element={<History/>}>
        <Route path='Team' element={<Team/>}/>
        <Route path='Company' element={<Company/>}/>
        </Route>
        <Route path='/Members' element={<Members/>}/>
        <Route path='/Members/:dataItem' element={<MembersDetail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

    </div>
  )
}
export default App
