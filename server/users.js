const express = require('express');
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const router = express.Router();

const userSchema = new mongoose.Schema({
    fname: String,
    lname:String
});

userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);


router.post('/users', async(req,res)=>{
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({
        data: user,
        message: 'ok'
    });
});

router.get('/users', async(req,res)=>{
    const users = await User.find({});
    res.status(200).json({
        data: users,
        message:'ok'
    });
});





module.exports = router;