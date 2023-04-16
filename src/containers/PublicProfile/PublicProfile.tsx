import Error404Page from '@components/Error404Page';
import UserProfile from '@components/UserProfile';
import { CircularProgress } from '@mui/material';
import { useGetUserQuery } from '@services/githubUserApiSlice';
import { setError } from '@store/error/errorSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const PublicProfile = () => {
  const { username } = useParams();
  console.log(username);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetUserQuery(username);
  console.log('public profile called query');

  if (error) {
    // results in infinite loop
    // return <Navigate to="/*" />;
    if (error.status === 404) {
      // return <Error404Page />;
      dispatch(setError(true));

      // return <Navigate to="*" />;
    }
    // return <Error404Page />;
  }

  if (isLoading) {
    return <CircularProgress />;
  }
  return data && <UserProfile data={data} />;
};

export default PublicProfile;
