const mongoose = require('mongoose')
require('dotenv').config()

const connetionString = process.env.MONGO_URI

function connect(){
try {
    mongoose.connect(connetionString)
    console.log("CONNECTED TO DB")
} catch (error) {
    console.log(error)
}
}

connect()