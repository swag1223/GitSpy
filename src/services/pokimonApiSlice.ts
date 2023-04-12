import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => ({
        url: `pokemon/${name}`,
        // method: 'HEAD',
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
export default pokemonApi;
