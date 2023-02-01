import './App.css';
import ToDoForm from './components/ToDoForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import ToDoList from './components/ToDoList';
import React from "react";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Stack>
          <ToDoForm />
          <ToDoList />
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default App
