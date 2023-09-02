import Course from "./components/Course"
import Form from "./components/Form"
import Search from "./components/Search"

function App() {

  return (
    <div>
      <h3>Add a Course</h3>
      <Form/>
      <h3>Search:</h3>
      <Search/>
      <h3>Courses</h3>
      <Course/>
    </div>
  )
}

export default App


