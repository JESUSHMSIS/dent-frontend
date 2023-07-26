import {configureStore} from '@reduxjs/toolkit'
import {userSlice} from './user/userSlices'

export const store = configureStore({
    reducer:{
       users:userSlice.reducer
    },
    middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
        serializableCheck:false
    })
})
