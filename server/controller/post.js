const PostModel = require('../model/postModel')

async function getAllPosts( req, res){
    try {
        const getData = await PostModel.find()
        res.send(getData)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllPosts
}