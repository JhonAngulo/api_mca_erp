'use strict'
const express = require('express')
const response = require('../../network/response')

const router = express.Router()

const AuthService = require('./authService')
const authService = new AuthService()

router.get('/singin', async (req, res) => {
  const { username, password } = req.body

  try {
    const auth = await authService.login(username, password)
    response.success({ req, res, message: 'Access token', data: auth })
  } catch (error) {
    response.error({ req, res, message: 'Invalid data', status: 400 })
  }

})

router.get('/singout', async (req, res) => {

  res.send('Ok')
  // try {
  //   const list = await userService.get(id)    
  //   response.success({ req, res, message: 'User info', data: list })
  // } catch (error) {
  //   response.error({ req, res, message: 'Error when consulting the users' })
  // }

})

module.exports = router