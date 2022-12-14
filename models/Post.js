const mongoose = require('mongoose')

//create new model object
const Post = mongoose.model('Post',{
    title: String,
    description: String,
})

module.exports = Post