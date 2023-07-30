
import { configureStore } from '@reduxjs/toolkit';
import { 
  accountSlice,
  userSlice,
  typeAccountSlice,
  rolSlice
} from './';


export const store = configureStore({
  reducer:{
    users:userSlice.reducer,
    accounts: accountSlice.reducer,
    typeAccounts: typeAccountSlice.reducer,
    roles: rolSlice.reducer
  },
  middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
    serializableCheck:false
  })
})
