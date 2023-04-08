import Navbar from '@containers/Navbar/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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
