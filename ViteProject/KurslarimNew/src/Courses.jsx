import { useState } from "react";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

function Courses({tasks}) {

    const [value, setValue] = useState(0);

    const {content,title,price} = tasks[value];

    console.log(value);

    const checkValue = (value) => {
        if(value<0) {
            return tasks.length -1;
        }
        if(value>tasks.length-1) {
            return 0;
        }
            return value;
    }

    const handleLeft = () => {
        setValue((value)=>{
            let newValue = value -1;
            return checkValue(newValue);
        })
    }

    const handleRight = () => {
        setValue((value)=>{
            let newValue = value +1;
            return checkValue(newValue);
        })
    }

    const handleRandomClick = () => {
        let randomNumber = Math.floor(Math.random()*tasks.length);

        if(randomNumber==value)
            randomNumber = value+1;

        setValue(checkValue(randomNumber));
    }

    return (  
        <div>
        <h2>Kurslarim</h2>
        <FaChevronLeft onClick={handleLeft}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{content}</p>
        <FaChevronRight onClick={handleRight}/> <br></br>
        <button onClick={handleRandomClick}>Rastgele Atama Yap!</button>
        </div>
    );
}

export default Courses;

