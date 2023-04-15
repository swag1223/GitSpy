import { Navigate } from 'react-router-dom';
import cookies from 'browser-cookies';

import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { PrivateRoutePropTypes } from './types';

const PrivateRoute = ({ children }: PrivateRoutePropTypes): JSX.Element => {
  // const authToken = cookies.get('token');
  // console.log('private');
  const { token } = useSelector((state: RootState) => state.user.value);
  console.log(token);
  return !token ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
