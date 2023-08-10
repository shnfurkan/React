import { Button, Stack } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

function LessonButton() {

    return (
        <Stack spacing={4}>
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="secondary">Success</Button>
      <Button variant="outlined" color="secondary">Error</Button>
    </Stack>
    
    <Stack direction="row" spacing={2}>
      <Button color="error">Secondary</Button>
      <Button variant="contained" color="error">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
    </Stack>

    <Stack direction="row" spacing={2}>
      <Button color="success">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="outlined" color="success">Error</Button>
    </Stack>

    <Stack direction="row" spacing={2}>
    <Button variant="contained" color="warning" startIcon={<AirplanemodeActiveIcon/>}>Button</Button> 
    <Button variant="contained" color="info" endIcon={<AirplanemodeActiveIcon/>}>Button</Button>
    </Stack>

    </Stack>
    )}
export default LessonButton;

