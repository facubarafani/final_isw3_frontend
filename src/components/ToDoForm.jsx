import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
import { createToDo, deleteAllToDo } from '../api/api.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as React from 'react';

export default function ToDoForm() {
    const queryClient = useQueryClient();

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const mutation = useMutation({
        mutationFn: createToDo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const deleteMutation = useMutation({
        mutationFn: deleteAllToDo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleBody(e) {
        setBody(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        mutation.mutate({ title, body });
    }

    function handleDelete() {
        deleteMutation.mutate();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2}>
                <TextField id="title-textfield" label="Title" variant="outlined" placeholder="Insert a title" onChange={(e) => handleTitle(e)} value={title} />
                <TextField id="body-textfield" label="Body" variant="outlined" placeholder="Insert a body" onChange={(e) => handleBody(e)} value={body} />
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <Button variant="contained" type="submit">
                        Create
                    </Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>
                        DELETE ALL
                    </Button>
                </Stack>
                {deleteMutation.isSuccess &&
                    <Snackbar open={!open}autoHideDuration={5000} onClose={ handleClose } >
                        <Alert severity="error" sx={{ width: '100%' }}>
                            pROBAMDO
                        </Alert>
                    </Snackbar>}
            </Stack>
        </form>
    );
}