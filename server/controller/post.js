const PostModel = require('../model/postModel')

async function getAllPosts( req, res){
    res.json("Hi/: Running")
}

module.exports = {
    getAllPosts
}