import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const githubUserApi = createApi({
  reducerPath: 'githubUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    authenticateUserByToken: builder.query({
      query: (token) => ({
        url: `user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: ({
        avatar_url: avatarUrl,
        login: username,
        email,
        name,
        bio,
        location,
        public_repos: publicRepos,
        following,
        followers,
        blog,
        html_url: githubProfile,
      }: UserApiResponseType) => ({
        avatarUrl,
        username,
        email,
        name,
        bio,
        location,
        publicRepos,
        following,
        followers,
        blog,
        githubProfile,
      }),
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
    }),
  }),
});

export const {
  useAuthenticateUserByTokenQuery,
  useGetSearchedUsersQuery,
  useGetUserQuery,
} = githubUserApi;
export default githubUserApi;
