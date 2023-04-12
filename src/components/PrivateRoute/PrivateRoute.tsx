import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '@store/index';

import { PrivateRoutePropTypes } from './types';

const PrivateRoute = ({ children }: PrivateRoutePropTypes): JSX.Element => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.user.value.isLoggedIn
  );
  const auth = { token: isLoggedIn };

  return !auth.token ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
