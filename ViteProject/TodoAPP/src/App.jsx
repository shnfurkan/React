import CreateTask from "./CreateTask"
import Footer from "./Footer";
import Header from "./Header"
import ListTask from "./ListTask";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const handleTask = (inputValue,textArea) => {
    const CreatedData = [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        inputValue,
        textArea,
      }
    ]
    setTasks(CreatedData);
  }

  const handleDeletingData = (id) => {
    const afterDeletingTasks = tasks.filter((task)=> {
      return task.id !==id;
    })
    setTasks(afterDeletingTasks);
  }

  return (
    <div>
      <Header/> <br/>
      <CreateTask newData={handleTask}/>
      <ListTask tasks={tasks} deletingData={handleDeletingData}/>
      <Footer/>
    </div>
  )
}

export default App


