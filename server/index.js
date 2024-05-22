const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const dbConnect = require('./connectDB')
const LocalStrategy = require('passport-local').Strategy
require('dotenv').config()

dbConnect(process.env.MONGO_URI)

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize())

app.use(passport.session())



app.listen(3000, () => console.log("server is running..."))