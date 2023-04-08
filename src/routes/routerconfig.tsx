import Error404Page from '@components/Error404Page/Error404Page';
import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import Profile from '@components/Profile/Profile';
import Login from '@containers/Login/Login';
import Suggestions from '@containers/Suggestions/Suggestions';
import Layout from '@layout/Layout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/suggestions',
        element: (
          <PrivateRoute>
            <Suggestions />
          </PrivateRoute>
        ),
      },

      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
