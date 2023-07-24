import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './TaskCreate'
import TaskList from './TaskList';
import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([]);

  const handleData = async (valueInput,valueTask) => {
    const response =  await axios.post('http://localhost:3000/tasks', {
      valueInput,
      valueTask,
    });
    const CreatedData = [...tasks,response.data];
    setTasks(CreatedData);
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  },[]);

  const handleDeleteData = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeletingTasks = tasks.filter((task)=> {
      return task.id !==id;
    })
    setTasks(afterDeletingTasks);
  }
  
  const editByUpload = async (id,updatedTitle,updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      valueInput:updatedTitle,
      valueTask:updatedTaskDesc,
    })
    const afterUpdatedTasks = tasks.map((task) => {
      if(task.id === id) 
      {
        return {id,valueInput:updatedTitle, valueTask:updatedTaskDesc }
      }
      return task;
    })
    setTasks(afterUpdatedTasks);
  }

  return (
    <div>
      <TaskCreate data={handleData}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} DeleteData={handleDeleteData} onUpdate={editByUpload}/>
    </div>
  )
}

export default App
