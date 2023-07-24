import { useState } from "react";

function TaskCreate({data, taskQuery, newData, onUpdate}) {

    const [valueInput, setValue] = useState(newData ? newData.valueInput : '');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const [valueTask, setValueTask] = useState(newData ? newData.valueTask : '');

    const handleChangeTask = (event) => {
        setValueTask(event.target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();
        
        if(taskQuery) {
            onUpdate(newData.id,valueInput,valueTask);
        }
        else {
            data(valueInput,valueTask);
        }
        setValue('');
        setValueTask('');

    }
    return (  
        <div>
            {
                taskQuery 
                ? 
                <div>      
                <h3>Lütfen Taski Düzenleyiniz!</h3>
                <form>
                    <label>Başliği Düzenleyiniz.</label> <br/>
                    <input value={valueInput} onChange={handleChange}/> <br/>
                    <label>Taski Düzenleyiniz!</label> <br/>
                    <textarea value={valueTask} onChange={handleChangeTask} rows={5}/> <br/>
                    <button onClick={handleButton}>Düzenle</button>
                </form> 
                </div>
                :
                <div>             
                <h3>Lütfen Task Ekleyiniz!</h3>
                <form>
                <label>Başlik</label> <br/>
                <input value={valueInput} onChange={handleChange}/> <br/>
                <label>Task Giriniz!</label> <br/>
                <textarea value={valueTask} onChange={handleChangeTask} rows={5}/> <br/>
                <button onClick={handleButton}>Oluştur</button>
                </form> 
                </div>
            }

        </div>
    );
}
export default TaskCreate;



