import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cookies from 'browser-cookies';

import { Box, Button, CircularProgress } from '@mui/material';

import { logout } from '@store/user/userSlice';
import { useAuthenticateUserByTokenQuery } from '@services/githubUserApiSlice';
import UserProfile from '@components/UserProfile';
import { RootState } from '@store/index';

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const token = cookies.get('token');
  const { token } = useSelector((state: RootState) => state.user.value);
  const { data, error, isLoading } = useAuthenticateUserByTokenQuery(token);

  // console.log(data);
  if (error) {
    return <>OOPS!! something went wrong profile api error</>;
  }
  if (isLoading) {
    return <CircularProgress size={50} />;
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {data && <UserProfile data={data} />}
      {/* <Button
        variant="contained"
        onClick={() => {
          dispatch(logout());
          cookies.erase('token');
          navigate('/login');
        }}
      >
        Logout
      </Button> */}
    </Box>
  );
};

export default Profile;
