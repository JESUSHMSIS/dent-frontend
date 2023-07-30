
import { configureStore } from '@reduxjs/toolkit';
import { 
  accountSlice,
  userSlice,
  authSlice
} from './';


export const store = configureStore({
  reducer:{
    users:userSlice.reducer,
    accounts: accountSlice.reducer,
    auth:authSlice.reducer
  },
  middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
    serializableCheck:false
  })

})
