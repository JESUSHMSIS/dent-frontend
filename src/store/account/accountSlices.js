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
    },
    setAddAccount: (state, action) => {
      state.accounts = [...state.accounts, action.payload.account];
    },
  }
});

export const { 
  setAccounts,
  setAddAccount
} = accountSlice.actions;