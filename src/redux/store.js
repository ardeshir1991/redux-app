import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../redux/counterSlice';
import postReducer from './../redux/postsSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer
    }
});