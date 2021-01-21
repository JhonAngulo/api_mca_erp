'use strict'
const express = require('express')

const { PORT } = require('../config')
const auth = require('./endpoints/auth/router')
const user = require('./endpoints/user/router')
const client = require('./endpoints/client/router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/auth', auth)
app.use('/user', user)
app.use('/client', client)



app.listen(PORT, () => console.log(`server start in the http://localhost:${PORT}`))