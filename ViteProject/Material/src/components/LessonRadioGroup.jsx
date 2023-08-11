import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText,Button} from '@mui/material'
import { useState } from 'react';

function LessonRadioGroup() {

    const [value, setValue] = useState("");
    const [helperText, setHelperText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(value == "furkan") {
            setHelperText("Doğru Seçim");
        }
        else if (value == "ahmet") {
            setHelperText("Yanliş Seçim");
        }
        else if (value == "murat") {
            setHelperText("Yanliş Seçim");
        }
        else {

        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>En Kapsamli Frontend Eğitimini Veren Eğitmen Kim?</FormLabel>
                <RadioGroup onChange={handleChange}>
                    <FormControlLabel
                    value="furkan"
                    label="Furkan"
                    control={<Radio/>}
                    />
                    <FormControlLabel
                    value="ahmet"
                    label="Ahmet"
                    control={<Radio/>}
                    />
                    <FormControlLabel
                    value="murat"
                    label="Murat"
                    control={<Radio/>}
                    />
                </RadioGroup>
                <Button type="submit" variant="contained" color="error">Gönder</Button>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </form>
    )
}

export default LessonRadioGroup;


