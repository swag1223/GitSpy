import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorState = {
  isError: boolean;
};

const initialState: ErrorState = {
  isError: false,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state: ErrorState, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    clearError: (state) => {
      state.isError = initialState.isError;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
