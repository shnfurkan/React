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

  const deletingData = (id) => {
    const afterDeleting = family.filter((data) => {
      return data.id !== id;
    })
    setFamily(afterDeleting);
  }

  const handleNewData = () => {
    goAndBack();
  }
  return (
    <div>

        {
          loading ? <>
        {
        family.length == 0 
        ? 
        <>
        <h3>Aile Tablosunu Yenilemek Istermisin?</h3>
        <button onClick={handleNewData}>Yenile</button>
        </> 
        
        : 
        <>
        <Courses family={family} deletingData={deletingData}/>
        </>
        
      }
          </> : <Loading/>
        }
    </div>
  )
}
export default App

