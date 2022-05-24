import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:'posts',
    initialState:[
        {id:'1', 
        title:'Post One', 
        content:'This Is The First Post', 
        userId: '1', 
        date: new Date(2022,2,15), 
        reactions:{like:0, dislike:0}},
        {id:'2', 
        title:'Post Two', 
        content:'This Is The Second Post', 
        userId: '2', 
        date: new Date(2022,3,27), 
        reactions:{like:0, dislike:0}}
    ],
    reducers:{
        postAdded: (state,action)=>{
            state.push(action.payload);
        },
        reactionAdded:(state,action)=>{
            const {postId, reaction} = action.payload;
            const selectedPost = state.find(post => post.id === postId);
            selectedPost.reactions[reaction]++;
        }
    }
});

export const {postAdded,reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;