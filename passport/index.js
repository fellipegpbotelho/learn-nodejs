const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport')

const app = express()

// Passport Basic Strategy
// passport.use(require('./src/auth/basic'))
require('./src/auth/local')(passport)

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

app.use(session({
    secret: 'asdiuh3842(*#*$HJiandao',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

// app.get('*', passport.authenticate('basic', {session: false}))
require('./src/index')(app, passport)

// mongoose
mongoose.connect('mongodb://localhost/auth')
mongoose.Promise = global.Promise

app.listen(9000, () => {
    console.log('Express started...')
})