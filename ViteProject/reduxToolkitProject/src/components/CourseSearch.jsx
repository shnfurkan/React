import { useSelector, useDispatch } from 'react-redux'
import {searching} from "../slices/courseSlice"

function CourseSearch() {

    const dispatch = useDispatch()
    const {searchTerm} = useSelector((state) => state.course)

    return (  
        <div>
            <h2>Ara</h2>
            <input value={searchTerm} onChange={(event) => dispatch(searching(event.target.value))}/>
        </div>
    );
}

export default CourseSearch;


