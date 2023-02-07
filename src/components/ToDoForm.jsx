import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { createToDo, deleteAllToDo } from '../api/api.js';

export default function ToDoForm() {
    const queryClient = useQueryClient();

    const [open, setOpen] = React.useState(false);
    const [deleteData, setDeleteData] = React.useState("");

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
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setOpen(true);
            setDeleteData(data.message);
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
        mutation.mutate({ title: 'pepe', body });
    }

    function handleDelete() {
        deleteMutation.mutate();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2}>
                <TextField inputProps={{ "data-testid": "title-textfield" }} role="title-textfield" id="todolist-title-textfield" label="Title" variant="outlined" placeholder="Insert a title" onChange={(e) => handleTitle(e)} value={title} />
                <TextField inputProps={{ "data-testid": "body-textfield" }} role="body-textfield" id="todolist-body-textfield" label="Body" variant="outlined" placeholder="Insert a body" onChange={(e) => handleBody(e)} value={body} />
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <Button data-testid="create-button" role="create-button" id="todolist-create-button" variant="contained" type="submit">
                        Create
                    </Button>
                    <Button id="todolist-deleteall-button" variant="contained" color="error" onClick={handleDelete}>
                        DELETE ALL
                    </Button>
                </Stack>
                {deleteMutation.isSuccess &&
                    <Snackbar id="todolist-delete-snackbar" open={open} autoHideDuration={5000} onClose={handleClose} sx={{ width: '100%' }}>
                        <Alert severity="info" >
                            {deleteData}
                        </Alert>
                    </Snackbar>}
                <Divider />
            </Stack>
        </form>
    );
}