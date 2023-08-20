import { useSelector, useDispatch } from 'react-redux'
import {changeTitle,changeDefinition,changeCost} from "../slices/formSlice"
import {add} from "../slices/courseSlice"

function CourseForm() {
    const {baslik,aciklama,fiyat} = useSelector((state) => state.form)
    const dispatch = useDispatch()

    const handleClickButton = (event) => {
        event.preventDefault();
        dispatch(add({baslik,aciklama,fiyat}));
        dispatch(changeTitle(""));
        dispatch(changeDefinition(""));
        dispatch(changeCost(""));
    }

    return (  
        <div>
            <h2>Kurs Ekle</h2>
            <form>
                <label>Başlik:</label> <br/> <br/>
                <input onChange={(event) => dispatch(changeTitle(event.target.value)) } value={baslik}/> <br/> <br/>
                <label>Açiklama:</label> <br/> <br/>
                <input onChange={(event) => dispatch(changeDefinition(event.target.value)) } value={aciklama}/> <br/> <br/>
                <label>Fiyat:</label> <br/> <br/>
                <input onChange={(event) => dispatch(changeCost(parseInt(event.target.value))) } type='number' value={fiyat}/>
            </form> <br/>
                <button onClick={handleClickButton}>EKLE</button>
        </div>
    );
}

export default CourseForm;

