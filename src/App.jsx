import './App.css';
import ToDoForm from './components/ToDoForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import ToDoList from './components/ToDoList';
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <Stack spacing={2}>
            <ToDoForm />
            <ToDoList />
          </Stack>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
