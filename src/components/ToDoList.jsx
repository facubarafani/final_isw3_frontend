import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import { fetchAllTodos } from '../api/api.js';
import ToDoCard from './ToDoCard';

const baseURL = "http://localhost:8082/api/todo";

export default function ToDoList() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetchAllTodos()
      .then((todos) => setTodos(todos))
  }, []);

  return (
    <List>
      {todos.map((todo) =>
        <ListItem key={todo._id}>
          <ToDoCard title={todo.title} body={todo.body}></ToDoCard>
        </ListItem>
      )}
    </List>
  );
}