require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//Connect to Database
let url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@timetable-hvel5.mongodb.net/Timetable?retryWrites=true&w=majority`
console.log(`Connecting to ${url}`)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(result=>{
    console.log('Successfully connected to the database.')
}).catch(err=>{
    console.log(err)
})

//Include all routes and middlewares
const app = express()
app.use(express.json())
app.use('/user', require('./routes/login'))

//Listen in a port
PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started in PORT ${PORT}`)
})