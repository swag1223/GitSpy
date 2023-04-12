import { createBrowserRouter } from 'react-router-dom';

import { URLS } from '@constants/routes';
import Error404Page from '@components/Error404Page';
import PrivateRoute from '@components/PrivateRoute';
import Profile from '@components/Profile';
import Login from '@containers/Login';
import Suggestions from '@containers/Suggestions';
import Layout from '@layout/index';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: URLS.LOGIN,
        element: <Login />,
      },
      {
        path: URLS.PROFILE,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
        path: URLS.NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
