'use strict'

const StoreService = require('../../store/storeService')
const storeService = new StoreService()

const AuthService = require('../auth/authService')
const authService = new AuthService()

class userService {

  constructor() {
    this.table = 'user'
  }

  async list() { 
    return storeService.list(this.table)
  }

  async get(id) {
    let col = await storeService.list(this.table)
    return col.find(item => item.id === Number(id)) || []
  }

  async upsert(data) {

    const user = {
      name: data.name,
      username: data.username
    }

    if (data.password || data.username) {
      await authService.upsert({
        id: 1,
        username: data.username,
        password: data.password
      })
    }

    return await storeService.upsert(this.table, user)
  }

  remove(tabla, id) {
    return true
  }
}

module.exports = userService