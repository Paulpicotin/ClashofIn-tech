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

      static async CreateAdmin(firsname, lastname, pseudo, email, password){
        const result = await COI.pool.query({
            text: `INSERT INTO Admin (firsname, lastname, pseudo, email, password) VALUES ($1, $2, $3, $4, $5)`,
            values: [firsname, lastname, pseudo, email, password]
        })
        return result.rows[0]
    }
      
}
/** @type {String} */
Admin.tableName = 'admin'

module.exports = Admin

    
