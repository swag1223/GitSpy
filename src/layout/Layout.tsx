import { Outlet, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import Navbar from '@containers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import Error404Page from '@components/Error404Page';
import { useEffect } from 'react';
import { clearError } from '@store/error/errorSlice';

const Layout = (): JSX.Element => {
  const location = useLocation();
  const { isError } = useSelector((state: RootState) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    // return () => {
    dispatch(clearError());
    // };
  }, [location.pathname, dispatch]);

  return (
    <Box>
      <Navbar />
      <Box display="flex" justifyContent="center" padding={5}>
        {isError ? <Error404Page /> : <Outlet />}
      </Box>
    </Box>
  );
};

export default Layout;
