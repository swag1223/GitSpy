import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    }),
  }),
});

export const { useAuthenticateUserByTokenQuery } = githubUserApi;
export default githubUserApi;
