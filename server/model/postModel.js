const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    content: String, 
    name: String
})

module.exports =  mongoose.model("PostModel", postSchema)