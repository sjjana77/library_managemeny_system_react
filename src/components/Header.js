import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { clearAuthToken } from '../slices/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(clearAuthToken());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/library_managemeny_system_react');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dijura MERN Stack - Janardh
        </Typography>
        {isAuthenticated ? (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/library_managemeny_system_react/books_catalog"
              sx={{ border: '1px solid #fff', marginRight: '20px' }}
            >
              Books Catalog
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/library_managemeny_system_react/transactions"
              sx={{ border: '1px solid #fff', marginRight: '20px' }}
            >
              Transactions
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/library_managemeny_system_react/register_user"
              sx={{ border: '1px solid #fff', marginRight: '20px' }}
            >
              Register
            </Button>
            <Button
              color="inherit"
              sx={{ border: '1px solid #fff' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Box sx={{ textAlign: 'right', marginLeft: '20px' }}>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                {user.username}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                {user.role === "admin" ? "Admin" : "Reader"}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/library_managemeny_system_react/"
              sx={{ border: '1px solid #fff', marginRight: '20px' }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/library_managemeny_system_react/register"
              sx={{ border: '1px solid #fff' }}
            >
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
