import { useState } from "react";

function Search({data}) {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        data(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
    
    <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <label>Ne Ariyorsunuz?</label> <br></br>
            <input/>
        </form>
    </div>
    
    );
}

export default Search;

