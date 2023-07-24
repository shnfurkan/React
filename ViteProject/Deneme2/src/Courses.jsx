import { useState } from "react";
import {FaChevronRight,FaChevronLeft} from "react-icons/fa";

function Courses({family}) {

    const [value, setValue] = useState(0);

    const {content,title,price} = family[value];
    console.log(value);

    const randomButton = () => {

        let randomNumber = Math.floor(Math.random()*family.length);

        if(randomNumber===value) {
            let randomNumberNew = value+1;
            if(randomNumberNew<0) {
                let newRandom=4;
                setValue(newRandom);
            }

            if(randomNumberNew>family.length-1) {
                let newRandomm=0;
                setValue(newRandomm);
            }

            // Chatgpt den alınma bir kod ne olduğunu çözemedim, [cannot destructure property 'content' of '' as it is undefined.] hatası alıyordum bunu eklemeden.
            if (randomNumberNew >= family.length) {
                randomNumberNew = 0;
              }
            
            setValue(randomNumberNew);
        }
        else
            setValue(randomNumber);
    }

    const control = () => {
        if(value==0)
            setValue(family.length-1);
        else
            setValue(value-1);
    }

    const control2 = () => {
        if(value==family.length-1)
            setValue(0);
        else
            setValue(value+1);
    }

    const handleLeft = () => {
        control();
    }

    const handleRight = () => {
        control2();
    }

    return (  
        <div>
            <h2>Aile Tablosu</h2>
            <button onClick={randomButton}>Rastgele Aileden Birini Getir!</button> <br></br> <br></br>
            <FaChevronLeft onClick={handleLeft}/>
            <p>{title}</p>
            <p>{price}</p>
            <p>{content}</p>
            <FaChevronRight onClick={handleRight}/>
        </div>
    );
}

export default Courses;

