import { combineReducers, configureStore } from '@reduxjs/toolkit';

import githubUserApi from '@services/githubUserApiSlice';
import pokemonApi from '@services/pokimonApiSlice';

import userSliceReducer from './user/userSlice';
import errorReducer from './error/errorSlice';

const rootReducer = combineReducers({
  user: userSliceReducer,
  error: errorReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [githubUserApi.reducerPath]: githubUserApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      githubUserApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
