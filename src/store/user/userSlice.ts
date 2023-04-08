import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserStateValue {
  username: string;
  isLoggedIn: boolean;
}

interface UserState {
  value: UserStateValue;
}

const initialState: UserState = {
  value: { username: '', isLoggedIn: false },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    },

    logout: (state: UserState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
