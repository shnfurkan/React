import { useState } from 'react'
import './App.css'
import TaskCreate from './TaskCreate'
import TaskList from './TaskList';

function App() {

  const [tasks, setTasks] = useState([]);

  const handleData = (valueInput,valueTask) => {
    const CreatedData = [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        valueInput,
        valueTask,
      }
    ]
    setTasks(CreatedData);
  }
  const handleDeleteData = (id) => {
    const afterDeletingTasks = tasks.filter((task)=> {
      return task.id !==id;
    })
    setTasks(afterDeletingTasks);
  }
  
  const editByUpload = (id,updatedTitle,updatedTaskDesc) => {
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


