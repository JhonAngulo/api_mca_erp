'use strict'

const bcrypt = require('bcrypt')
const token = require('./token')
const StoreService = require('../../store/storeService')
const storeService = new StoreService()

class authService {

  constructor() {
    this.table = 'auth'
  }

  async login(username, password) { 
   
    const data = await storeService.query(this.table, { username: username })

    let compare = await bcrypt.compare(password, data.password)

    if (compare) {
      return token.sign(data)
    } else {
      throw new Error('Invalid data')
    }
    
  }

  async upsert(data) {
    return await storeService.upsert(this.table, data)
  }

  
}

module.exports = authService