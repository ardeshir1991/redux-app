import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../redux/counterSlice';
import postReducer from './../redux/postsSlice';
import userReducer from './../redux/usersSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer,
        users: userReducer
    }
});