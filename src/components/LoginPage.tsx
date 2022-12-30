import React from 'react';
import { Alert, Box, Button, Snackbar, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { firebaseAuth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setUser } from "../redux/reducers/userSlice";
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const provider = new GoogleAuthProvider();

  const closeError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const triggerLogin = () => {
    setButtonDisabled(true);
    signInWithPopup(firebaseAuth, provider).then((result) => {
      const user = result.user;

      // set user details
      dispatch(setUser({
        uid: user.uid,
        displayName: user.displayName ?? "Anonymous",
      }));

      // navigate to home page
      navigate("/");

    }).catch((error) => {
      // reenable login button
      setButtonDisabled(false);
      
      // open error snackbar
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(`Login failed: Error ${errorCode}. ${errorMessage}`);
      setOpen(true);
    });
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxHeight="40vh"
      sx={{
        borderRadius: "20px",
        padding: "5%",
        backgroundColor: "white",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          GOAL SUPREMO
        </Typography>
        <Button 
          size="large" 
          variant="contained"
          disabled={buttonDisabled}
          startIcon={<GoogleIcon />}
          aria-label="google login" 
          onClick={triggerLogin}
        >
          <Typography variant="button">
            Login with Google
          </Typography>
        </Button>
      </Stack>
      <Snackbar open={open} autoHideDuration={6000} onClose={closeError}>
        <Alert onClose={closeError} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LoginPage;