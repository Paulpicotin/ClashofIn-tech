const COI = require('../utils/COI.js')

class Case{
    /** @type {Number} */
    id
    /**@type {Number} */
    length 
    /**@type {Number} */
    width
    /** @type {Number} */
    id_town

    
  static toSqlTable () {
    return `
    CREATE TABLE ${Case.tableName} (
        id SERIAL PRIMARY KEY,
        id_town SERIAL FOREIGN KEY,
        length INT, 
        width INT
    )`
  }
}
/** @type {String} */
Case.tableName = 'case'

module.exports = Case