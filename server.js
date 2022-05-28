const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postRouter = require('./server/posts');
const userRouter = require('./server/users');

mongoose.connect('mongodb://localhost:27017/reduxapp')
.then(()=>console.log('connected to mongo'))
.catch((e)=> console.log('could not connect to db'));


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET", true);
        return res.status(200).json({});
    }
    next();
});

app.use('/api', postRouter);
app.use('/api', userRouter);



const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}`));