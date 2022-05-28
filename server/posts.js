const express = require('express');
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const router = express.Router();


const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: String,
    reactions:{
        like: Number,
        dislike: Number
    },
    date: Date
});

postSchema.plugin(timestamp);

const Post = mongoose.model('Post', postSchema);



router.get('/posts', async(req,res)=>{
    const posts = await Post.find();
    res.status(200).json({data: posts, message: 'ok'});
});

router.post('/posts', async(req,res)=>{
    const post = await new Post(req.body);
    post.date = new Date();
    post.reactions = {like:0, dislike:0};
    await post.save();
    res.status(200).json({data: post, message: 'ok'});
});

router.post('/postReaction', async(req,res)=>{
    const {reaction, postId} = req.body;
    // console.log(req.body);
    const post = await Post.findById(postId);
    // console.log(post);
    post.reactions[reaction]++;
    await post.save();
    res.status(200).json({data: post, message:'ok'});
});


module.exports = router;