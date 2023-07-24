import './App.css'
import { useState } from 'react';
import ImageList from './ImageList';
import Search from './Search'
import CallApi from './Api';

function App() {

  const [newValue, setNewValue] = useState([]);

  const handleData = async (term) =>  {
    debugger;
    const result =  await CallApi(term);
    setNewValue(result);
  }

  return (
    <div>
      <Search data={handleData}/>
      <ImageList newValue={newValue}/>
    </div>
  )
}

export default App
