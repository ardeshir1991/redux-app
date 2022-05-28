import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
const axios = require('axios');

const POSTS_URL = 'http://localhost:5000/api/posts';
const REACTION_URL = 'http://localhost:5000/api/postReaction';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const result = await axios.get(POSTS_URL);
    const data = await result.data.data;
    return {data};
})

export const saveNewPost = createAsyncThunk('posts/saveNewPost', async (info) => {
    const response = await axios.post(POSTS_URL, info);
    const data = await response.data.data;
    return {data};
})

export const fetchReactions = createAsyncThunk('post/fetchReactions', async info => {
    const response = await axios.post(REACTION_URL, info);
    const data = await response.data.data;
    return {data};
})
const postsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[],
        status:'',
        errors:[]
    },
    reducers:{
        postAdded: (state,action)=>{
            state.posts.push(action.payload);
        },
        reactionAdded:(state,action)=>{
            const {postId, reaction} = action.payload;
            const selectedPost = state.posts.find(post => post._id === postId);
            selectedPost.reactions[reaction]++;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled,(state, action)=>{
            state.status = 'idle';
            state.posts = action.payload.data;
        })
        .addCase(fetchPosts.rejected,(state, action)=>{
            state.status = 'failed';
            state.errors.push(action.error.message);
        })
        .addCase(saveNewPost.fulfilled, (state, action) => {
            state.posts.push(action.payload.data)
        })
        .addCase(fetchReactions.fulfilled, (state,action) => {
            const {postId} = action.payload.data._id;
            const index = state.posts.findIndex(post => post._id === postId);
            state.posts[index] = action.payload.data;
        })
    }
});

export const allPosts = state => state.posts.posts;
export const getStatuse = state => state.posts.status;
export const getErrors = state => state.posts.errors;

export const {postAdded,reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;