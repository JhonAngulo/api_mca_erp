'use strict'
const db = {
  'user': [
    {
      id: 1,
      name: 'Jhon Angulo'
    }
  ]
}

class storeService {

  async list(table) {
    return db[table]
  }

  async get(table, id) {
    let col = list(table)
    return col.find(item => item.id === id) || null
  }

  async upsert(table, data) {

    if (!db[table]) {
      db[table] = [];
    }

    db[table].push(data);


    return true
  }

  async remove(tabla, id) {
    return true
  }
}

module.exports = storeService