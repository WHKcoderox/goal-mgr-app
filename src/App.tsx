import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import * as firebaseConfig from './firebase-config';
import LoginPage from './components/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>children</ProtectedRoute>,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth={false}
        sx={{
          backgroundColor: theme.palette.primary.dark,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
