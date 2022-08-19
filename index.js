const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const userApi=require('./api/userApi.js')
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

// connecting mongodb 
const run = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.nyhzgpe.mongodb.net/Chat?retryWrites=true&w=majority`)
        .then(()=>console.log('Mongodb connected'))
    } catch (error) {
        console.log(error)
    }
}
run()

// user route 
app.use('/chat/api',userApi)

app.listen(port, () => console.log(`Server listening on ${port}`))