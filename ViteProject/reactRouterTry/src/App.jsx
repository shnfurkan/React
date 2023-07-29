import Ahmet from '../components/Ahmet'
import AltComponent from '../components/AltComponent'
import Error from '../components/Error'
import Furkan from '../components/Furkan'
import History from '../components/History'
import Home from '../components/Home'
import Link from '../components/Link'
import Profil from '../components/Profil'
import Team1 from '../components/Team1'
import Team2 from '../components/Team2'
import './App.css'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Link/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profil' element={<Profil/>}/>
        <Route path='/History' element={<History/>}/>
        <Route path='/Furkan' element={<Furkan/>}/>
        <Route path='/Ahmet' element={<Ahmet/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/AltComponent' element={<AltComponent/>}>
          <Route path='Team1' element={<Team1/>}/>
          <Route path='Team2' element={<Team2/>}/>
        </Route>
      </Routes>

    </div>
  )
}
export default App

