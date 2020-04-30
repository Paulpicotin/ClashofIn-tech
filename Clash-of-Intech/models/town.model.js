const PostgresStore = require('../utils/PostgresStore.js')

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
    

    
  static toSqlTable () {
    return `
    CREATE TABLE ${Town.tableName} (
        id SERIAL PRIMARY KEY,
        id_player SERIAL FOREIGN KEY,
        length INT, 
        width INT,
        townname TEXT
    )`
  }
}
/** @type {String} */
Town.tableName = 'town'

module.exports = Town