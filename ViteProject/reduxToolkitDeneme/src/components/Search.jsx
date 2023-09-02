import { useSelector, useDispatch } from 'react-redux'
import {searchChange} from "../slices/CourseSlice"

function Search() {

    const {search} = useSelector((state) => state.courses)
    const dispatch = useDispatch()

    return (  
        <div>
            <input onChange={(event) => dispatch(searchChange(event.target.value))} value={search}/>
        </div>
    );
}

export default Search;



