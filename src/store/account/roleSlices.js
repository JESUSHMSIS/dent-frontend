import { createSlice } from '@reduxjs/toolkit';

export const rolSlice = createSlice({
  name: 'rol',
  initialState: {
    roles: []
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload.roles;
    }
  }
});

export const { 
  setRoles
} = rolSlice.actions;