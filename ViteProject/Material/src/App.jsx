import './App.css'
import LessonButton from './components/LessonButton'
import { LessonButtonGroup } from './components/LessonButtonGroup'
import LessonTextField from './components/LessonTextField'
import LessonTypography from './components/LessonTypography'

// mui.com

function App() {

  return (
    <div>
      <LessonTypography/>
      <LessonButton/> <br></br>
      <LessonButtonGroup/> <br></br>
      <LessonTextField/>
    </div>
  )
}

export default App



