const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    time: {
        type: Date,
        required: true
    },
    temperatue: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', PostSchema)