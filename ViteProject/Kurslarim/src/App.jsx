import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks =  async () => {
    setLoading(true);
    const response =  await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
    setLoading(false);
  }

  const handleData = (id) => {
    const afterDeleting = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeleting);
  }

  useEffect(()=> {
    fetchTasks();
  },[]);

  const handleNewClick = () => {
    fetchTasks();
  }

  return (
  <div>
    {loading 
    ? <Loading/> : <>
    {
      tasks.length==0 
      ? <div>
        <h2>Kurslarin Bitti!</h2>
        <button onClick={handleNewClick}>Yenile</button>
      </div>
      
      : <Courses tasks={tasks} data={handleData}/>
    }
</>
    }
  </div>
  )
}

export default App

