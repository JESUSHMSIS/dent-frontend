
import { configureStore } from '@reduxjs/toolkit';
import { 
  accountSlice,
  userSlice,
  typeAccountSlice,
  rolSlice,
  authSlice
} from './';


export const store = configureStore({
  reducer:{
    users:userSlice.reducer,
    accounts: accountSlice.reducer,
    typeAccounts: typeAccountSlice.reducer,
    roles: rolSlice.reducer,
    auth: authSlice.reducer
  },
  middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
    serializableCheck:false
  })

})
