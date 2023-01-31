import './App.css'
import ToDoCard from './components/ToDoCard'
import ToDoTextBox from './components/ToDoTextBox'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

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
        <Stack spacing={2}>
          <ToDoTextBox />
          <ToDoCard />
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default App
