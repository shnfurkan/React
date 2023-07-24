import './App.css'
import TaskCreate from './TaskCreate'
import TaskList from './TaskList'
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  const handleData = (title,text) => {
    const createdData = [
      ...tasks, {
        id: Math.round(Math.random()*999999),
        title,
        text,
      }
    ]
    setTasks(createdData);
  }

  const deletedData = (id) => {
    const afterDeleting = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeleting);
  }

  return (
    <div>
      <TaskCreate data={handleData}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} deletedData={deletedData}/>
    </div>
  )
}
export default App



