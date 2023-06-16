'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coin extends Model {
    
    static get table() {
        return 'coins'
      }
    
      static get primaryKey() {
        return 'id'
      }
    
      static get createdAtColumn() {
        return null
      }
    
      static get updatedAtColumn() {
        return null
      }
     
}
    
module.exports = Coin
   
    
    
    

    
    
    
