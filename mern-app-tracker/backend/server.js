const express = require('express')
const cors = require('cors')

//helps us connect to mongoDB
const mongoose = require('mongoose')


require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//cors middleware
app.use(cors())
//allows us to send and receive JSON
app.use(express.json())


//get from mongoDB dashboard
const uri = process.env.ATLAS_URI

//connect to database
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection

connection.once('open', () =>{
	console.log(`MongoDB connection success.`)
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

//if someone goes to /exercises in URL,
//it goes to exercises router
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

//set up server
app.listen(port, () =>{
	console.log(`server running on port ${port}`)
})
