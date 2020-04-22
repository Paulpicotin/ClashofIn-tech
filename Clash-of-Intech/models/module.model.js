
/* eslint camelcase: 0 */

const PostgresStore = require('../utils/PostgresStore.js')

const debug = require('debug')('hephaistos:module.model.js')

const ModuleUserRole = require('./module-user-role.model.js')







class Module {

  /** @type {Number} */

  id

  /** @type {String} */

  name

  /** @type {Date} */

  creation_date



  /**

   * @param {Number} id

   * @returns {Promise<Module>}

   */

  static async getById (id) {

    const result = await PostgresStore.client.query({

      text: `SELECT * FROM ${Module.tableName} WHERE id=$1`,

      values: [id]

    })

    return result.rows[0]

  }



  /**

   * @param {import('./user.model')} user

   * @param {Number} moduleId

   * @param {String} right

   * @returns {Promise<Boolean>}

   */

  static async getAll(){
    const result = await PostgresStore.client.query(
      `SELECT id, name FROM ${Module.tableName}`
    )
    return result.rows
  }



  /**

   * @param {import('./user.model')} user

   * @returns {Promise<Module[]>}

   */

  static async getbyUserId (userId) {

  
    const result = await PostgresStore.client.query({
      text: `
      SELECT * FROM ${Module.tableName} AS m
        LEFT JOIN ${ModuleUserRole.tableName} AS r ON m.id=r.module_id
      WHERE r.user_id=$1`,
      values: [userId]
    })
    return result.rows
  }

  static async getByUserId(userId) {
      const result = await PostgresStore.client.query({
          text:`SELECT * FROM ${Module.tableName}`
      })
  }

  /**

    * @param {Number} id

    * @param {String} name

    * @returns {Promise<Module>}

    */

  static async update (id, name) {

    const result = await PostgresStore.client.query({

      text: `UPDATE ${Module.tableName} SET name = $1

        WHERE id=$2 RETURNING *`,

      values: [name, id]

    })

    debug('result', result.rows[0])

    return result.rows[0]

  }



  /**

   * @param {Object.<('name'|'creation_date'), any>} params

   * @returns {Promise<Module>}

   */

  static async create (params) {

    if (Object.keys(params).length === 0) return null



    // filter out any non-alphanumeric parameter

    const fields = Object.keys(params)

      .filter(_ => _ !== 'id' && !_.match(/[^a-z_]/))



    const variables = fields.map((_, i) => `$${i + 1}`).join(', ')

    const values = fields.map(_ => params[_])

    const fieldNames = fields.join(',')



    const q = {

      text: `INSERT INTO ${Module.tableName} (${fieldNames}) VALUES (${variables})

        RETURNING *`,

      values

    }



    debug('q', q)



    const result = await PostgresStore.client.query(q)

    debug('result', result.rows[0])

    return result.rows[0]

  }



  static toSqlTable () {

    return `

    CREATE TABLE ${Module.tableName} (

      id SERIAL PRIMARY KEY,

      name TEXT,

      creation_date TIMESTAMPTZ NOT NULL

    )

    `

  }

}



/** @type {String} */

Module.tableName = 'module'



module.exports = Module