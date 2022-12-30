import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CircularProgress, Container, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import * as firebaseConfig from './firebase-config';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './components/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><MainPage /></ProtectedRoute>,
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PersistGate loading={<CircularProgress />} persistor={persistor} >
          <RouterProvider router={router} />
        </PersistGate>
      </Container>
    </ThemeProvider>
  );
}

export default App;
