import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState:[
        {id:'1', fname: 'ardeshir', lname:'esmaili'},
        {id:'2', fname: 'sahar', lname:'mokhtari'},
        {id:'3', fname: 'khashayar', lname:'esmaili'}
    ],
    reducers:{}
});

export const allUsers = state => state.users;

export default usersSlice.reducer;