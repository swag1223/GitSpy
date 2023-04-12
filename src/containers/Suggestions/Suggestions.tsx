import { useState } from 'react';

import { Button, Box, TextField, Typography } from '@mui/material';

import pokemonApi from '@services/pokimonApiSlice';

const Suggestions = (): JSX.Element => {
  /** STATES */
  const [input, setInput] = useState('pikachu');

  /** QUERY HOOKS */
  const [trigger, result] = pokemonApi.useLazyGetPokemonByNameQuery();

  const { data, error, isLoading } = result;

  if (error) {
    return <>Oh no pokemon found!!</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <TextField
          size="small"
          placeholder="search your fav pokemon"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{ marginLeft: '10px', padding: '7px 15px' }}
          onClick={() => trigger(input)}
        >
          Fetch
        </Button>
      </Box>
      {data ? (
        <>
          <Typography variant="h3" textAlign="center">
            {data.species.name}
          </Typography>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </Box>
  );
};

export default Suggestions;
