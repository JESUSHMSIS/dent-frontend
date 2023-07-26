import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        users:[]
    },
    reducers:{
        //users
        setUsers: (state, action) => {
            state.users = action.payload.users;
        },
        setAddUser: (state, action) => {
            state.users = [...state.users, action.payload.user];
        },
        setUpdateUser: (state, action) => {
            state.users = [...state.users.map((e) => {
                if (e.id === action.payload.user.id) {
                    return {
                        ...action.payload.user
                    }
                }
                return e
            })];
        },
        setDeleteUser: (state, action) => {
            state.users = [...state.users.filter(e => e.id != action.payload.id)];
        }
    }
})


export const {
    //users
    setUsers,
    setAddUser,
    setUpdateUser,
    setDeleteUser
} = userSlice.actions;