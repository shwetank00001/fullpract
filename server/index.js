const express = require('express')
const cors = require('cors')
require('./db/connect')
const posts = require('./routes/post')

const app = express()

app.use(cors())

app.get('/', ( req, res ) => {
    res.send("hello")
})

app.use('/posts', posts)

app.listen(5000, ()=>{
    console.log("APP ON PORT: 5000")
})