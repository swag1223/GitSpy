import { Box, Button, TextField, Typography } from '@mui/material';
import { login } from '@store/user/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [usernameIp, setUsernameIp] = useState('Anonymous');
  const dispatch = useDispatch();
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2">Login To Gitspy</Typography>
      <>
        <TextField
          size="small"
          placeholder="username"
          onChange={(e) => setUsernameIp(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginTop: '10px', padding: '7px 15px' }}
          onClick={() => {
            dispatch(login({ username: usernameIp, isLoggedIn: true }));
            navigate('/');
          }}
        >
          Login
        </Button>
      </>
    </Box>
  );
};

export default Login;
