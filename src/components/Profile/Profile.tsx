import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Typography } from '@mui/material';

import { RootState } from '@store/index';
import { logout } from '@store/user/userSlice';

const Profile = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column">
      <Typography>Welcome!! {user.username}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
export default Profile;
