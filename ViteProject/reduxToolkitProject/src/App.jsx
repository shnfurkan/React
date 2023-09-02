import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"
import CourseSearch from "./components/CourseSearch"

function App() {

// https://redux-toolkit.js.org/

  return (
   <div>
      <CourseForm/> <br/> <br/> <br/>
      <CourseSearch/> <br/> <br/> <br/>
      <CourseList/>
   </div>
  )
}

export default App

