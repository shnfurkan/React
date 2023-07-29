import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({value, deletedData, onNewUpdate}) {

    const [change, setChange] = useState(false);

    const handleDelete = () => {
        deletedData(value.id);
    }

    const handleUpdateButton = () => {
        setChange(true);
    }

    const onUpdateSubmit = (id,updatedTitle,updatedTaskDesc) => {
        setChange(false);
        onNewUpdate(id,updatedTitle,updatedTaskDesc);
    }

    return (  
        <div>
            {change ? <TaskCreate query={true} value={value} onUpdate={onUpdateSubmit}/>
            : 
            <>
            <h3>Göreviniz</h3>
            <p>{value.title}</p>
            <h3>Yapilacaklar</h3>
            <p>{value.text}</p>
           <button onClick={handleDelete}>Sil</button>
           <button onClick={handleUpdateButton}>Güncelle!</button>
            </>}
        </div>
    );
}

export default TaskShow;


