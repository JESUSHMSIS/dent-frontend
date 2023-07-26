
import { configureStore } from '@reduxjs/toolkit';
import { 
  accountSlice
} from './';

export const store = configureStore({
  reducer: {
    accounts: accountSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})