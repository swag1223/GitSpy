import { Outlet, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import bgImage from '@assets/images/bg.svg';
import Navbar from '@containers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import Error404Page from '@components/Error404Page';
import { useEffect } from 'react';
import { clearError } from '@store/error/errorSlice';

const Layout = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isError } = useSelector((state: RootState) => state.error);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch, location.pathname]);

  return (
    <>
      <Navbar />
      <Box
        sx={{ backgroundImage: `url(${bgImage})` }}
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {isError ? <Error404Page /> : <Outlet />}
      </Box>
    </>
  );
};

export default Layout;
