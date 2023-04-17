import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import camelcaseKeys from 'camelcase-keys';

import CONSTANTS from '@constants/constants';
import { RootState } from '@store/index';

const githubUserApi = createApi({
  reducerPath: 'githubUserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: CONSTANTS.GITHUB_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).user.value;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
