import {Box,TextField,MenuItem} from "@mui/material"
import { useState } from "react";

function LessonSelect() {

    const [country, setCountry] = useState("");

    const handleChange = (e) => {
        setCountry(e.target.value);
    }

    return (  
        <Box width="250px">
            <TextField value={country} onChange={handleChange} label="Ülke Seçiniz" select fullWidth>
                <MenuItem value="TR">Türkiye</MenuItem>
                <MenuItem value="USA">ABD</MenuItem>
                <MenuItem value="FR">FRANCE</MenuItem>
            </TextField>
        </Box>
    );
}

export default LessonSelect;

