import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { createToDo } from '../api/api.js';

export default function ToDoForm() {

    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleBody(e) {
        setBody(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createToDo({ title, body });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2}>
                <TextField id="title-textfield" label="Title" variant="outlined" placeholder="Insert a title" onChange={(e) => handleTitle(e)} value={title} />
                <TextField id="body-textfield" label="Body" variant="outlined" placeholder="Insert a body" onChange={(e) => handleBody(e)} value={body} />
                <Stack direction="row" justifyContent="flex-end">
                    <Button variant="contained" type="submit">
                        Create
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
}