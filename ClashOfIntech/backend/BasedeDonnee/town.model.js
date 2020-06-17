const COI = require('../utils/COI.js')

class Town{
    /** @type {Number} */
    id
    /**@type {Number} */
    length 
    /**@type {Number} */
    width
    /** @type {Number} */
    id_player
    /** @type {String} */
    townname
    
   async getbyUserId(id_player){
    
    }
    
  static toSqlTable () {
    return `
    CREATE TABLE ${Town.tableName} (
        id SERIAL PRIMARY KEY,
        id_player INT,
        length INT, 
        width INT,
        townname TEXT
    )`
    
  }

  static async CreateTown(id_player, length = 10, width = 10, townname = "je n'ai pas de nom."){
    const result = await COI.pool.query({
        text: `INSERT INTO Town (id_player, length, width, townname) VALUES ($1, $2, $3, $4)`,
        values: [id_player, length, width, townname]
    })
    return result.rows[0]
  }
  
}
/** @type {String} */
Town.tableName = 'town'

module.exports = Town