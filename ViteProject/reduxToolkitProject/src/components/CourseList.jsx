import { useSelector,useDispatch } from 'react-redux'
import {deleting} from "../slices/courseSlice"

function CourseList() {
    
    const {datas} = useSelector(({form,course:{data,searchTerm}}) => {
        const filteredDatas = data.filter((course) => course.baslik.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
            datas:filteredDatas,
        }
    })
    
    const dispatch = useDispatch()
    
    return (  
        <div>
            <h2>Kurslarim</h2>
            {
                datas.map((value,index) => {
                    return (
                        <div key={index}>
                            <p>Başlik:</p>
                            <p>{value.baslik}</p>
                            <p>Açiklama:</p>
                            <p>{value.aciklama}</p>
                            <p>Fiyat:</p>
                            <p>{value.fiyat}</p>
                            <button onClick={() => dispatch(deleting(value.id))}>SİL</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default CourseList;

