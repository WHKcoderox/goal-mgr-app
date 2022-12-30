import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <Container 
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h2" align="center">
          GOAL SUPREMO
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
