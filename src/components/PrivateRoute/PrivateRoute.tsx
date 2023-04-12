import { Navigate } from 'react-router-dom';
import cookies from 'browser-cookies';

type PrivateRoutePropTypes = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRoutePropTypes): JSX.Element => {
  const authToken = cookies.get('token');
  return !authToken ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
