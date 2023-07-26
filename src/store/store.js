
import { configureStore } from '@reduxjs/toolkit';
import { 
  accountSlice,
  userSlice
} from './';


export const store = configureStore({
  reducer:{
    users:userSlice.reducer,
    accounts: accountSlice.reducer
  },
  middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
    serializableCheck:false
  })
})
