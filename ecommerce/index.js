const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = http.createServer(app)

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//cors
app.use(cors())

// database
mongoose.connect('mongodb://localhost/ecommerce')
const mongoDb = mongoose.connection

mongoDb.on('connected', () => {
	console.log('mongo ok')
})

mongoDb.on('error', () => {
	console.log('mongo erro')
})

// routes
require('./routes')(app)

// up server
server.listen(3000, () => {
	console.log('express ok')
})