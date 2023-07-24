import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({newData, DeleteData, onUpdate}) {

    const [updateData, setUpdateData] = useState(false);

        const handleButton = () => {
            DeleteData(newData.id);
        }

        const handleUpdateButton = () => {
            setUpdateData(true);
        }

        const onUpdateSubmit = (id, updatedTitle, updatedTaskDesc) => {
            setUpdateData(false);
            onUpdate(id, updatedTitle, updatedTaskDesc);
        }

    return (  
        <div>
            {updateData 
            ? <TaskCreate taskQuery={true} newData={newData} onUpdate={onUpdateSubmit}/> 
            : <div> <h3>Göreviniz</h3>
            <p>{newData.valueInput}</p>
            <h3>Yapilacaklar</h3>
            <p>{newData.valueTask}</p>
            
            <div className="button">
            <button onClick={handleButton}>Sil</button>
            <button className="buttonGüncelle" onClick={handleUpdateButton}>Güncelle</button>
            </div> </div>}
        </div>
    );
}

export default TaskShow;

