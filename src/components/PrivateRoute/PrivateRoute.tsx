import { Navigate } from 'react-router-dom';
import cookies from 'browser-cookies';

import { PrivateRoutePropTypes } from './types';

const PrivateRoute = ({ children }: PrivateRoutePropTypes): JSX.Element => {
  const authToken = cookies.get('token');

  return !authToken ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
