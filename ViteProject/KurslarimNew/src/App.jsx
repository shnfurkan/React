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

  useEffect(()=> {
    fetchTasks();
  },[]);

  return (
  <div>
    { loading ? <Loading/> : <Courses tasks={tasks}/> }
  </div>
  )
}
export default App
