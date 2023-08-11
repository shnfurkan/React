import Course from './Course'
import Angular from './/images/angular.jpg'
import BootStrap from './/images/bootstrap5.png'
import CcSharp from './/images/ccsharp.png'
import KompleWeb from './/images/kompleweb.jpg'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function App() {

  return (
    <div>
    <AppBar>
      <Toolbar>Kart Projesi</Toolbar>
    </AppBar> <br/><br/><br/><br/>
      <Course
      image = {Angular}
      title = "Angular"
      text = "Kurs Bitimine Son 4"
      />
      <Course
      image = {BootStrap}
      title = "BootStrap"
      text = "Kurs Bitimine Son 3"
      />
      <Course
      image = {CcSharp}
      title = "CcSharp"
      text = "Kurs Bitimine Son 2"
      />
      <Course
      image = {KompleWeb}
      title = "KompleWeb"
      text = "Kurs Bitimine Son 1"
      />
    </div>
  )
}

export default App

