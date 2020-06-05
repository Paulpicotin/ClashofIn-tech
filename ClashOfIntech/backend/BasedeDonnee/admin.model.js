const COI = require('../utils/COI.js')

class Admin  {
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
        CREATE TABLE ${Admin.tableName} (
          id SERIAL PRIMARY KEY,
          firsname TEXT,
          lastname TEXT,
          pseudo TEXT,
          access_right TEXT,
          email TEXT,
          password TEXT        
        )`
      }
      
}
/** @type {String} */
Admin.tableName = 'admin'

module.exports = Admin

    
