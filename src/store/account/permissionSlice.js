import { createSlice } from '@reduxjs/toolkit';

export const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    permissions: [],
  },
  reducers: {
    //permissions
    setPermissions: (state, action) => {
      state.permissions = action.payload.permissions;
    }
  }
});

export const { 
  setPermissions
} = permissionSlice.actions;