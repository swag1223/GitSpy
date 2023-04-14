import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import Navbar from '@containers/Navbar';
import { COLORS } from '@constants/theme';

const Layout = (): JSX.Element => {
  return (
    <Box>
      <Navbar />
      <Box display="flex" justifyContent="center" padding={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
