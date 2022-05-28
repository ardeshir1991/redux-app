import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'http://localhost:5000/api/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const response = await axios.get(USERS_URL);
    const users = await response.data.data;
    return {users};
});

export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        users:[],
        status:'',
        errors:[]
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchUsers.pending, (state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.users = action.payload.users;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export const allUsers = state => state.users.users;

export default usersSlice.reducer;