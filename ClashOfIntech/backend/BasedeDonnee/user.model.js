const COI = require('../utils/COI.js')

class User {
    /** @type {Number} */
    id
    /** @type {String} */
    COIPrenom
    /** @type {String} */
    COINom
    /**@type {String} */
    COIPseudo    
    /** @type {String[]} */
    access_rights
    /**@type {String} */
    COIEmail
    /**@type {String} */
    COIPassword


    static toSqlTable () {
        return `
        CREATE TABLE ${User.tableName} (
          id SERIAL PRIMARY KEY,
          COIPrenom TEXT,
          COINom TEXT,
          COIPseudo TEXT PRIMARY KEY,
          access_right TEXT,
          COIEmail TEXT,
          COIPassword TEXT PRIMARY KEY         
        )`
      }

      async CreateUser(data){
        const { Client } = require('pg')
        const client = new Client()
        
        client.connect()

        const result = await client.query({
            text: `INSERT INTO ex (COIPrenom, COINom, COIPseudo, COIEmail, COIPassword) VALUES ($1, $2, $3, $4, $5)`,
            values: [data.COIPrenom, data.COINom, data.COIPseudo, data.COIEmail, data.COIPassword]
        })
        return result.rows[0]
      }


      async ReturnUsers(){
        const { Client } = require('pg')
        const client = new Client()
        
        client.connect()
        
        const result = await client.query({
          text: `SELECT* COINom FROM User`
        })
        return result
      }

      
}

/** @type {String} */
User.tableName = 'user'

module.exports = User

    
