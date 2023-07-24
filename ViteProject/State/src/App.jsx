import 'bulma/css/bulma.css'
import { useState } from 'react'
import './App.css'
import Course from './Course'

function App() {

const randomNumber = () => {
  const array = ['Angular', 'Bootstrap', 'Ccsharp', 'Web'];
  return array [Math.floor(Math.random()*array.length)]
}

const [value, setValue] = useState([]);

const handleClick = () => {
  setValue([...value,randomNumber()]);
}

  return (
    <div>
      
      <div class="buttons">
  <button className="button is-danger" onClick={handleClick} >Kurs Ekle</button>
      </div>
      
      {
      value.map (
        (course,index) => {
          return <Course key={index} value={course}></Course>
        }
      )
      }

    </div>
  )
}

export default App

