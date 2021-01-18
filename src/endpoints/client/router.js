'use strict'
const express = require('express')
const response = require('../../network/response')

const router = express.Router()

const ClientService = require('./clientService')
const clientService = new ClientService()

router.get('/', async (req, res) => {

  try {
    const list = await clientService.list()
    response.success({ req, res, message: 'Client list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of clients' })
  }

})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const list = await clientService.get(id)    
    response.success({ req, res, message: 'Client info', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the client' })
  }

})

router.post('/', async (req, res) => {

  try {
    const list = await clientService.upsert(req.body)
    response.success({ req, res, message: 'Client created', data: list })
  } catch (error) {
    response.error({ req, res, message: 'error creating client' })
  }

})

router.put('/', async (req, res) => {

  try {
    const list = await clientService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

router.delete('/', async (req, res) => {

  try {
    const list = await clientService.list()
    response.success({ req, res, message: 'User list', data: list })
  } catch (error) {
    response.error({ req, res, message: 'Error when consulting the list of users' })
  }

})

module.exports = router