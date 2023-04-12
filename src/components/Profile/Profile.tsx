import { Box, Button, Typography } from '@mui/material';
import { RootState } from '@store/index';
import { logout } from '@store/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'browser-cookies';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  return (
    <Box display="flex" flexDirection="column">
      <Typography>Welcome!! {user.username}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(logout());
          cookies.erase('token');
          navigate('/login');
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
export default Profile;
