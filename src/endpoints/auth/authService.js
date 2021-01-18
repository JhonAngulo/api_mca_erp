'use strict'

const StoreService = require('../../store/storeService')
const storeService = new StoreService()

class userService {

  constructor() {
    this.table = 'auth'
  }

  async list() { 
    return storeService.list(this.table)
  }

  async get(id) {
    let col = await storeService.list(this.table)
    return col.find(item => item.id === Number(id)) || []
  }

  async upsert(data) {
    return await storeService.upsert(this.table, data)
  }

  remove(tabla, id) {
    return true
  }
}

module.exports = userService