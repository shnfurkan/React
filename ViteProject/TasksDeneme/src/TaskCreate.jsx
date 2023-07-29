import { useState } from "react";

function TaskCreate({data,query,value,onUpdate}) {

    const [title, setTitle] = useState(query ? value.title : '');
    const [text, setText] = useState(query ? value.text : '');

    const handleChangeInput = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeArea = (event) => {
        setText(event.target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();
        
        if(query)
            onUpdate(value.id,title,text);

        else
            data(title,text);
        setTitle('');
        setText('');
    }

    return (  
        <div>
            {query 
            ?<>
                <h3>Lütfen Taski Düzenleyiniz!</h3>
            <form>
                <label>Başliki Düzenleyiniz!</label> <br/>
                <input value={title} onChange={handleChangeInput}/> <br/>
                <label>Taski Düzenleyiniz!</label> <br/>
                <textarea value={text} onChange={handleChangeArea} rows={5}/> <br/>
                <button onClick={handleButton}>Düzenle</button>
            </form>
            </>
            :<>
            <h3>Lütfen Task Ekleyiniz!</h3>
            <form>
                <label>Başlik</label> <br/>
                <input value={title} onChange={handleChangeInput}/> <br/>
                <label>Task Giriniz!</label> <br/>
                <textarea value={text} onChange={handleChangeArea} rows={5}/> <br/>
                <button onClick={handleButton}>Create</button>
            </form>
            </>}

        </div>
    );
}
export default TaskCreate;




