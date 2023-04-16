import { combineReducers, configureStore } from '@reduxjs/toolkit';

import githubUserApi from '@services/githubUserApiSlice';

import userSliceReducer from './user/userSlice';
import errorReducer from './error/errorSlice';

const rootReducer = combineReducers({
  user: userSliceReducer,
  error: errorReducer,
  [githubUserApi.reducerPath]: githubUserApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubUserApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
