import { createBrowserRouter } from 'react-router-dom';

import URLS from '@constants/routes';
import Error404Page from '@components/Error404Page';
import PrivateRoute from '@components/PrivateRoute';
import Profile from '@containers/Profile';
import Login from '@containers/Login';
import Suggestions from '@containers/Suggestions';
import Layout from '@layout/index';
import PublicProfile from '@containers/PublicProfile/PublicProfile';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: URLS.PROFILE,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        path: URLS.LOGIN,
        element: <Login />,
      },

      {
        path: URLS.SUGGESTIONS,
        element: (
          <PrivateRoute>
            <Suggestions />
          </PrivateRoute>
        ),
      },
      {
        path: URLS.USERNAME,
        element: <PublicProfile />,
      },

      {
        path: URLS.NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
