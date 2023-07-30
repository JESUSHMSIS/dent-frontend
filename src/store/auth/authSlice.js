// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    user: {},
    statusUser: 'not-authenticated',
    data: {},
    // errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      // state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.data = payload;
      // state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.statusUser = 'not-authenticated';
      state.data = {};
      // state.errorMessage = payload;
    },

    onLoginUser: (state, { payload }) => {
      state.statusUser = 'authenticatedUser';
      state.user = payload;
      // state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onLoginUser } = authSlice.actions;

export default authSlice.reducer;
