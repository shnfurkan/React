import { useSelector, useDispatch } from 'react-redux'
import {titleChange,definitonChange,costChange} from "../slices/FormSlice"
import {addData} from "../slices/CourseSlice"

function Form() {

    const {title,definition,cost} = useSelector((state) => state.form)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(addData({title,definition,cost}));
        dispatch(titleChange(""));
        dispatch(definitonChange(""));
        dispatch(costChange(0));
    }
    return (  
        <div>
            <form>
                <label>Title:</label> {" "}
                <input onChange={(event) => dispatch(titleChange(event.target.value)) } value={title}/> <br/><br/>
                <label>Definition:</label> {" "}
                <input onChange={(event) => dispatch(definitonChange(event.target.value)) } value={definition}/> <br/><br/>
                <label>Cost:</label> {" "}
                <input onChange={(event) => dispatch(costChange(event.target.value)) } value={cost}/>
            </form>
            <br/> <button onClick={handleClick}>ADD</button>
        </div>
    );
}

export default Form;


