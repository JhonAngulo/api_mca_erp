'use strict'
const express = require('express')
const response = require('../../network/response')

const router = express.Router()

const UserService = require('./userService')
const userService = new UserService()

router.get('/', async (req, res) => {

  try {
    const list = await userService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const list = await userService.get(id)    
    response.success({ req, res, message: 'User info', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the users' })
  }

})

router.post('/', async (req, res) => {

  try {
    const list = await userService.upsert(req.body)
    response.success({ req, res, message: 'User created', data: list })
  } catch (error) {
    response.error({ req, res, message: 'error creating user' })
  }

})

router.put('/', async (req, res) => {

  try {
    const list = await userService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

router.delete('/', async (req, res) => {

  try {
    const list = await userService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

module.exports = router