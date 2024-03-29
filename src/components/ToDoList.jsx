import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import React from 'react';
import { fetchAllTodos } from '../api/api.js';
import ToDoCard from './ToDoCard';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';

export default function ToDoList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress role = "loading" id="todolist-progress" color="secondary" sx={{ display: 'flex', justifyContent: 'center' }} />
    </div>

  }

  if (error) {
    return <Alert severity="error" id="todolist-error-alert" role="alert">An error occured while attempting to fetch the todo list. Make sure the database is up an running.</Alert>
  }

  return (
    <Stack spacing={2}>
      <h1 role="prueba">Hola probando</h1>
      <Chip role="counter" label={<h3>You currently have {data.length} items on your todo list</h3>} />
      <List id="todolist-item">
        {data.map((todo) =>
          <ListItem role="todo-item" key={todo._id} id={"todolist-item-" + todo._id}>
            <ToDoCard title={todo.title} body={todo.body}></ToDoCard>
          </ListItem>
        )}
      </List>
    </Stack>
  );
}