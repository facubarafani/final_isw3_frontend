import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import { fetchAllTodos } from '../api/api.js';
import ToDoCard from './ToDoCard';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';

const baseURL = "http://localhost:8082/api/todo";

export default function ToDoList() {
  const {data, isLoading, error} = useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })

  if (isLoading) { return <CircularProgress color="secondary" /> }
  return (
    <List>
      {data.map((todo) =>
        <ListItem key={todo._id}>
          <ToDoCard title={todo.title} body={todo.body}></ToDoCard>
        </ListItem>
      )}
    </List>
  );
}