'use strict'

const bcrypt = require('bcrypt')
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
      id: data.id,
      name: data.name,
      username: data.username
    }
  
    if (data.password || data.username) {
      const hashPassword = await bcrypt.hash(data.password, 10)
      await authService.upsert({
        id: data.id,
        username: data.username,
        password: hashPassword
      })
    }

    return await storeService.upsert(this.table, user)
  }

  remove(tabla, id) {
    return true
  }
}

module.exports = userService