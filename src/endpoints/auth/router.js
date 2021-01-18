'use strict'
const express = require('express')
const response = require('../../network/response')

const router = express.Router()

const UserService = require('./userService')
const userService = new UserService()

router.get('/singin', async (req, res) => {

  try {
    const list = await userService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

router.get('/singout', async (req, res) => {
  const { id } = req.params
  try {
    const list = await userService.get(id)    
    response.success({ req, res, message: 'User info', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the users' })
  }

})

module.exports = router