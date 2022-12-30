import { 
  AppBar, 
  BottomNavigation, 
  BottomNavigationAction, 
  Box, 
  Container, 
  CssBaseline, 
  Grid, 
  IconButton, 
  Menu, 
  MenuItem, 
  Paper, 
  Toolbar, 
  Typography 
} from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import TaskIcon from '@mui/icons-material/Task';
import { useTheme, Theme } from '@mui/material/styles';
import { removeUser, selectUser } from "../redux/reducers/userSlice";
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface NavBarHeights {
  topHeight: number;
  bottomHeight: number;
}

const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const user = useSelector(selectUser);
  
  const screenRef = React.useRef<HTMLDivElement>(null);
  const appBarRef = React.useRef<HTMLDivElement>(null);
  const bottomNavRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [navBarHeights, setNavBarHeights] = React.useState<NavBarHeights>({
    topHeight: 0,
    bottomHeight: 0,
  });

  React.useEffect(() => {
    if (screenRef && screenRef.current) {
      (screenRef.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }
  }, [value]);

  React.useLayoutEffect(() => {
    setNavBarHeights({
      topHeight: appBarRef?.current?.offsetHeight ?? 0,
      bottomHeight: (bottomNavRef?.current?.offsetHeight ?? 0) + 5,
    });
  }, []);
  
  const handleAccountDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAccountDropdown = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <Box ref={screenRef}>
      <CssBaseline />
      <Paper sx={{position:'fixed', left:0, right:0}} elevation={3}>
        <AppBar ref={appBarRef}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.displayName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Goal Supremo
            </Typography>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleAccountDropdown}
                  color="inherit"
                >
                  <AccountCircle fontSize="large"/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseAccountDropdown}
                >
                  <MenuItem 
                    onClick={logoutUser} 
                    sx={{color: theme.palette.error.main}}
                  >
                    <LogoutIcon />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </Paper>
      
        <Box 
          component="main" 
          sx={{
            paddingTop: `${navBarHeights.topHeight}px`, 
            paddingBottom: `${navBarHeights.bottomHeight}px`,
          }}
        >
          <Typography variant="h1">bodbodb bod do id </Typography><Typography variant="h1">i  asd asd sad asdodybo dybdoyb  bodasday dbody bodybody </Typography><Typography variant="h1">body bodybody body bodybody body
          bodyboddy body bodybody body </Typography><Typography variant="h1">bodybody body bodybody body bodybody bod
          y bodybody body{navBarHeights.topHeight}p {navBarHeights.bottomHeight} bodybody body bodybody body bodybody bod
          y body</Typography>
        </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          ref={bottomNavRef}
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Tasks" icon={<TaskIcon />} />
          <BottomNavigationAction label="Favorites" icon={<TaskIcon />} />
          <BottomNavigationAction label="Nearby" icon={<TaskIcon />} />
          </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MainPage;