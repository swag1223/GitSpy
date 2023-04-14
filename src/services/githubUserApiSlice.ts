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

    // getUser: builder.query({
    //   query: (username) => ({
    //     url: `users/${username}`,
    //   }),
    // }),
  }),
});

export const { useAuthenticateUserByTokenQuery } = githubUserApi;
export default githubUserApi;
