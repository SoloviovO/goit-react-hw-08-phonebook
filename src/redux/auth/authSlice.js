import { registerUser } from './authThunk';

const { createSlice } = require('@reduxjs/toolkit');
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
