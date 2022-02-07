const express = require('express');
const Post = require('../models/Post');

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('update temperature and time')
})

router.post('/', async(req,res) => {
    const post = new Post({
        time: req.body.time,
        temperatue: req.body.temperatue
    }) 
    try{
        const savedPost = await post.save();
        res.json(savedPost)
    }catch(err){
        res.json(err)
    }
})



module.exports = router