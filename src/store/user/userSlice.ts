import cookies from 'browser-cookies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, UserStateValue } from './types';

const initialState: UserState = {
  value: { username: '', isLoggedIn: false, token: cookies.get('token') },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    },

    logout: (state: UserState) => {
      state.value = { ...initialState.value, token: null };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
