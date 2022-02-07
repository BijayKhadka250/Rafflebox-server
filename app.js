const express = require('express');
const  mongoose  = require('mongoose');
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const Post = require('./models/Post')
dotEnv.config()

const app = express()
app.use(bodyParser.json());
const postsRoute = require('./routes/posts')
app.use(cors());
app.use('/update', postsRoute)

app.get('/',async(req,res) => {
    // res.send('we are on Home')
    try{
        const posts = await Post.find().sort({time: -1})
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, () => {
    console.log('connected to db');
})



app.listen(3000)