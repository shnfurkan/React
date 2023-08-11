import {Button} from "@mui/material"
import { useState } from "react";

function CreateTask({newData}) {

    const [inputValue, setInputValue] = useState("");
    const [textArea, setTextArea] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        newData(inputValue,textArea);
        setInputValue("");
        setTextArea("");
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleTextChange = (e) => {
        setTextArea(e.target.value);
    }

    return (  
        <div>
            <form className="form">
            <pre>
            <input name="title" placeholder="Take title" className="input" value={inputValue} onChange={handleInputChange}></input> <br/> <br/>
            <textarea name="content" rows={5} placeholder="Take note" className="textArea" value={textArea} onChange={handleTextChange}></textarea> <br/> <br/>
            <Button color="secondary" onClick={handleClick}>Add</Button>
            </pre>
            </form>
        </div>
    );
}

export default CreateTask;


