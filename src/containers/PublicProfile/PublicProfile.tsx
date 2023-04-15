import Error404Page from '@components/Error404Page';
import UserProfile from '@components/UserProfile';
import { CircularProgress } from '@mui/material';
import { useGetUserQuery } from '@services/githubUserApiSlice';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const PublicProfile = (): JSX.Element => {
  const { username } = useParams();
  console.log(username);
  // const search = useLocation().search;
  // const id = new URLSearchParams(search).get("code");
  const { data, error, isLoading } = useGetUserQuery(username);
  console.log(data, error);

  if (error) {
    // results in infinite loop
    // return <Navigate to="/*" />;
    if (error.status === 404) {
      // return <Error404Page />;
      return <Navigate to="*" />;
    }
    // return <Error404Page />;
  }

  if (isLoading) {
    return <CircularProgress />;
  }
  return <UserProfile data={data} />;
};

export default PublicProfile;
