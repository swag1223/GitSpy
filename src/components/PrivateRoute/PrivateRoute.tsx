import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type PrivateRoutePropTypes = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRoutePropTypes) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.user.value.isLoggedIn
  );
  const auth = { token: isLoggedIn };
  return !auth.token ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
