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
    setDeleteAccount: (state, action) => {
      state.accounts = [...state.accounts.filter(account => account.id != action.payload.id)];
    }
  }
});

export const { 
  setAccounts,
  setAddAccount,
  setDeleteAccount
} = accountSlice.actions;