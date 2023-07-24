import './App.css'
import Auth from './Auth'
import authContext from './context/authContext'
import { useState } from 'react'

function App() {

  const [valueState, setValueState] = useState(false);

  const loginAuth = () => {
    setValueState(true);
  }

  return (
    
    <authContext.Provider value={{status:valueState, login: loginAuth}}>
      <Auth/>
    </authContext.Provider>

  )
}

export default App

