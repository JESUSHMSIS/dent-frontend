import { createSlice } from '@reduxjs/toolkit';

export const rolSlice = createSlice({
  name: 'rol',
  initialState: {
    roles: []
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload.roles;
    },
    setAddRol: (state, action) => {
      state.roles = [...state.roles, action.payload.rol];
    },
  }
});

export const { 
  setRoles,
  setAddRol
} = rolSlice.actions;