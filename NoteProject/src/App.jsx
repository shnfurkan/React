import React from 'react';
import Notes from './components/Notes';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import { UserProvider } from './UserContext';
import Note from './components/Note';
import Home from './components/Home';

const App = () => {

  return (
    <div>
      <UserProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/note' element={<Note/>}/>
      </Routes>
      </UserProvider>
    </div>
  );
};

export default App;