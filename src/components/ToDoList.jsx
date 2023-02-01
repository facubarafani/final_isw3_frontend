import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import React from 'react';
import { fetchAllTodos } from '../api/api.js';
import ToDoCard from './ToDoCard';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';

const baseURL = "http://localhost:8082/api/todo";

export default function ToDoList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress id="todolist-progress" color="secondary" sx={{ display: 'flex', justifyContent: 'center' }} />
    </div>

  }

  if (error) {
    return <Alert severity="error" id="todolist-error-alert">An error occured while attempting to fetch the todo list. Make sure the database is up an running.</Alert>
  }

  return (
    <List id="todolist-list">
      {data.map((todo) =>
        <ListItem key={todo._id} id={"todolist-item-" + todo._id}>
          <ToDoCard title={todo.title} body={todo.body}></ToDoCard>
        </ListItem>
      )}
    </List>
  );
}