'use strict'

const Schema = use('Schema')

class CoinsSchema extends Schema {
  up () {
    this.create('coins', (table) => {
      table.string('id').primary()
      table.string('symbol').notNullable()
      table.string('name').notNullable()
      table.json('platforms')
      table.timestamps()
    })
  }

  down () {
    this.drop('coins')
  }
}

module.exports = CoinsSchema
