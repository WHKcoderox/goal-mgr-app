import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal["A200"],
      dark: teal[700],
      contrastText: 'white'
    }
  },
});