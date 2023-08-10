import './App.css'
import EventAction from './components/EventAction';
import Home from './components/Home'
import Instructor from './components/Instructor'
import InstructorList from './components/InstructorList';
import LoginCheck from './components/LoginCheck';
import Request from './components/Request';

function App() {

  const yapi = {
    firstName: "Furkan",
    lastName: "Şahin",
  };

  const yapiList = [
  {
    firstName: "11111",
    lastName: "11111",
  },
  {
    firstName: "222222",
    lastName: "222222",
  },
  {
    firstName: "33333",
    lastName: "333333",
  }
]
  return (
    <div>
      <Home name="Furkan"/> <br></br>
      <Instructor newYapi={yapi}/> <br></br>
      <InstructorList newList={yapiList}/> <br></br>
      <Request deger="error"/> <br></br>
      <EventAction/> <br></br>
      <LoginCheck/>
    </div>
  )
}

export default App


