const COI = require('../utils/COI.js')

class User {
    /** @type {Number} */
    id
    /** @type {String} */
    firstname
    /** @type {String} */
    lastname
    /**@type {String} */
    pseudo    
    /** @type {String[]} */
    access_rights
    /**@type {String} */
    email
    /**@type {String} */
    password


    static toSqlTable () {
        return `
        CREATE TABLE ${User.tableName} (
          id SERIAL PRIMARY KEY,
          firsname TEXT,
          lastname TEXT,
          pseudo TEXT PRIMARY KEY,
          access_right TEXT,
          email TEXT,
          password TEXT PRIMARY KEY         
        )`
      }
      
}
/** @type {String} */
User.tableName = 'user'

module.exports = User

    
