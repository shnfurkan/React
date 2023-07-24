import './App.css'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import Courses from './Courses';
import Loading from './Loading';

function App() {

  const [family, setFamily] = useState([]);
  const [loading, setLoading] = useState(false);

  const goAndBack = async () => {
    setLoading(false);
    const response = await axios.get('http://localhost:3000/family');
    setFamily(response.data);
    setLoading(true);
    }

  useEffect(()=> {
    goAndBack();
  },[]);

  return (
    <div>

      {loading ? <Courses family={family} /> : <Loading/> }

    </div>
  )
}
export default App


