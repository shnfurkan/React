import { useState } from "react"
import Right from "./components/Right"
import Left from "./components/Left"
import { useDispatch } from 'react-redux'
import { postInputActions } from "./redux/InputAction"

function App() {

  const dispatch = useDispatch()
  const [mainInputs, setMainInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMainInputs({
        ...mainInputs,
        [name]: value,
    });
};
    const handleClick = (event) => {
      event.preventDefault()
      dispatch(postInputActions(mainInputs));
      setMainInputs({
        mainInput: "",
        mainInput2: "",
        rightInput: "",
        rightInput2: "",
        leftInput: "",
        leftInput2: "",
      });
    }

  return (
    <div>
      <div className="Main">
        <h3>Main Platform Form</h3>
            <input onChange={handleChange} name="mainInput" value={mainInputs.mainInput} /> <br/> <br/>
            <input onChange={handleChange} name="mainInput2" value={mainInputs.mainInput2}/> <br/> <br/>
            <button onClick={handleClick}>ADD API</button> <br/><br/><br/>
      </div>
      <Right mainInputs={mainInputs} handleChange={handleChange}/> <br/><br/><br/>
      <Left mainInputs={mainInputs} handleChange={handleChange}/>
    </div>
  )
}
export default App
