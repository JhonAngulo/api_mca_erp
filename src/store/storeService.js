'use strict'
const db = {
  'user': [
    {
      id: 1,
      username: 'jangulo',
      name: 'jhon angulo',
    }
  ],
  'auth': [
    {
      id: 1,
      username: 'jangulo',
      password: '$2b$10$dZaL/2yEHUWgkGetXzw2POnLPS72iZawLA/wUzJTidaW..szAU2Ay'
    }
  ]

}

class storeService {

  async list(table) {
    return await db[table]
  }

  async get(table, id) {
    let col = this.list(table)
    return col.find(item => item.id === id)[0] || null
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

  async query(table, q) {
    let col = await this.list(table)
    let keys = Object.keys(q)
    let key = keys[0]

    return col.filter(item => item[key] === q[key])[0] || null
  }
}

module.exports = storeService