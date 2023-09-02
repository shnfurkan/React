import { useSelector, useDispatch } from 'react-redux'
import {deletingData} from "../slices/CourseSlice"

function Course() {
    
    const {datas} = useSelector(({form,courses:{data,search}}) => {
        const filteredDatas = data.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()))
        return {
            datas:filteredDatas,
        }
    })

    const dispatch = useDispatch()

    return (  
        <>
            {
                datas.map((value,index)=> {
                    return (
                        <div key={index}>
                            <h4>Title:</h4>
                            <p>{value.title}</p>
                            <h4>Definition:</h4>
                            <p>{value.definition}</p>
                            <h4>Cost:</h4>
                            <p>{value.cost}</p>
                            <button onClick={()=> dispatch(deletingData(value.id))}>DELETE</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Course;
