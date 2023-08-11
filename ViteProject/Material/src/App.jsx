import './App.css'
import LessonButton from './components/LessonButton'
import { LessonButtonGroup } from './components/LessonButtonGroup'
import LessonRadioGroup from './components/LessonRadioGroup'
import LessonSelect from './components/LessonSelect'
import LessonTextField from './components/LessonTextField'
import LessonTypography from './components/LessonTypography'

// mui.com

function App() {

  return (
    <div>
      <LessonTypography/>
      <LessonButton/> <br></br>
      <LessonButtonGroup/> <br></br>
      <LessonTextField/> <br></br>
      <LessonRadioGroup/> <br></br>
      <LessonSelect/>
    </div>
  )
}

export default App
