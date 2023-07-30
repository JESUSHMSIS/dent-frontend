import { createSlice } from '@reduxjs/toolkit';

export const typeAccountSlice = createSlice({
  name: 'typeAccount',
  initialState: {
    typeAccounts: [],
  },
  reducers: {
    setTypeAccounts: (state, action) => {
      state.typeAccounts = action.payload.typeAccounts;
    }
  }
});

export const { 
  setTypeAccounts 
} = typeAccountSlice.actions;