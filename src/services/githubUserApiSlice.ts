import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import camelcaseKeys from 'camelcase-keys';

import CONSTANTS from '@constants/constants';

const githubUserApi = createApi({
  reducerPath: 'githubUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.GITHUB_BASE_URL }),
  endpoints: (builder) => ({
    authenticateUserByToken: builder.query({
      query: (token) => ({
        url: `user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: UserApiResponseType): UserResponseType =>
        camelcaseKeys(response),
    }),

    getSearchedUsers: builder.query({
      query: (username) => ({
        url: `search/users?q=${username}&per_page=10`,
      }),
    }),

    getUser: builder.query({
      query: (username) => ({
        url: `users/${username}`,
      }),
      transformResponse: (response: UserApiResponseType): UserResponseType =>
        camelcaseKeys(response),
    }),
  }),
});

export const {
  useAuthenticateUserByTokenQuery,
  useGetSearchedUsersQuery,
  useGetUserQuery,
} = githubUserApi;
export default githubUserApi;
