import React from 'react'
import { Button, Stack,ButtonGroup } from '@mui/material';

export const LessonButtonGroup = () => {
  return (
    <Stack direction="row" spacing={4}>
        <ButtonGroup>
        <Button variant="outlined" color="error">1.Button</Button>
        <Button variant="outlined" color="error">2.Button</Button>
        <Button variant="outlined" color="error">3.Button</Button>
        </ButtonGroup>
        <ButtonGroup orientation='vertical' size='small'>
        <Button variant="contained" color="secondary">1.Button</Button>
        <Button variant="contained" color="secondary">2.Button</Button>
        <Button variant="contained" color="secondary">3.Button</Button>
        </ButtonGroup>
    </Stack>
  )
}
