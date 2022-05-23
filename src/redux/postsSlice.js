import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:'posts',
    initialState:[
        {id:'1', title:'Post One', content:'This Is The First Post'},
        {id:'2', title:'Post Two', content:'This Is The Second Post'}
    ],
    reducers:{
        postAdded: (state,action)=>{
            state.push(action.payload);
        }
    }
});

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;