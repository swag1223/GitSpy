import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonApi from 'services/pokimonApiSlice';
import userSliceReducer from './user/userSlice';

const rootReducer = combineReducers({
  user: userSliceReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
