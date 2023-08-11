import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

function LessonTextField() {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (  
        <Stack direction="row" spacing={4}>
            <TextField label="Ad" variant='outlined' value={value} onChange={handleChange}
            helperText= {!value ? <><p>Lütfen ad giriniz.</p></> : <><p>Lütfen adinizi gizli tutunuz.</p></>}
            />
        </Stack>
    );
}

export default LessonTextField;
