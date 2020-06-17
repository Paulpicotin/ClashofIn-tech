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
          email  TEXT UNIQUE NOT NULL,
          password TEXT        
        )`
      }

      static async CreateAdmin(firsname, lastname, pseudo, email, password){
        try{
        const result = await COI.pool.query({
            text: `INSERT INTO Admin (firsname, lastname, pseudo, email, password) VALUES ($1, $2, $3, $4, $5)`,
            values: [firsname, lastname, pseudo, email, password]
        })
        return result.rows[0]
      }catch(err){
        console.log(err.code)
        if (err.code === "23505"){
          throw new Error("l'email  est déjà utilisé")
        }
        else {
          throw err
        }
      }
    }
      
}
/** @type {String} */
Admin.tableName = 'admin'

module.exports = Admin

    
