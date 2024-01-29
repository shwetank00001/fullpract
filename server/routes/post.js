const express = require('express')
const route = express.Router()

const { getAllPosts } = require('../controller/post')

route.get('/' , getAllPosts)

module.exports = route