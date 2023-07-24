import { useState } from "react";

function TaskCreate({data}) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleChangeInput = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeArea = (event) => {
        setText(event.target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();
        data(title,text);
        setTitle('');
        setText('');
    }

    return (  
        <div>
            <h3>Lütfen Task Ekleyiniz!</h3>
            <form>
                <label>Başlik</label> <br/>
                <input value={title} onChange={handleChangeInput}/> <br/>
                <label>Task Giriniz!</label> <br/>
                <textarea value={text} onChange={handleChangeArea} rows={5}/> <br/>
                <button onClick={handleButton}>Create</button>
            </form>

        </div>
    );
}
export default TaskCreate;


