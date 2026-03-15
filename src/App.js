import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#000000',
        paper: '#121212',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: { xl: '1488px' }, backgroundColor: '#000000', minHeight: '100vh' }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
