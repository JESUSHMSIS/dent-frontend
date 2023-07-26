import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accounts: [],
  },
  reducers: {
    //accounts
    setAccounts: (state, action) => {
      state.accounts = action.payload.accounts;
    }
  }
});

export const { 
  setAccounts 
} = accountSlice.actions;