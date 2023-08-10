import { useState } from 'react'

function EventAction() {

    const [value, setValue] = useState("");

    const handleClick = (
        event:React.MouseEvent<HTMLButtonElement>,
        id:number
        ) => {
        console.log(event,id);
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (  
        <div>
           <input value={value} onChange={handleChange}></input>
            <button onClick={(event) => handleClick(event,4)}>Sil</button>
        </div>
    );
}

export default EventAction;



