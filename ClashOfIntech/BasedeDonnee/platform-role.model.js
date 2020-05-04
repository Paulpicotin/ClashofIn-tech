/* eslint camelcase: 0 */
const PostgresStore = require('../utils/PostgresStore.js')
// const debug = require('debug')('hephaistos:platform-role.model.js')
const RoleAccessRight = require('./role-access-right.model.js')
const Role = require('./role.model.js')
const config = require('../server.config.js')

/**
 * Roles that apply to the whole platform
 * Mainly necessary to be able to manage modules and users
 */
class PlatformRole {
  /** @type {Number} */
  user_id
  /** @type {Number} */
  role_id

  /**
   * @param {Number} roleId
   */
  static async deleteAllForRole (roleId) {
    await PostgresStore.client.query({
      text: `DELETE FROM ${PlatformRole.tableName} WHERE role_id=$1`,
      values: [roleId]
    })
  }

  /**
   * @param {Number} userId
   */
  static async deleteAllForUser (userId) {
    await PostgresStore.client.query({
      text: `DELETE FROM ${PlatformRole.tableName} WHERE user_id=$1`,
      values: [userId]
    })
  }

  /**
   * @param {import('./user.model.js')} user
   * @return {Promise<{ id: Number, name: String }>}
   */
  static async getUserRole (user) {
    const result = await PostgresStore.client.query({
      text: `SELECT role.id as id, role.name as name FROM ${Role.tableName} as role
        LEFT JOIN ${PlatformRole.tableName} AS pr
          ON pr.role_id = role.id
        WHERE pr.user_id = $1
        LIMIT 1`,
      values: [user.id]
    })
    return result.rows[0]
  }

  /**
   * @param {import('./user.model')} user
   * @param {String} right
   * @returns {Promise<Boolean>}
   */
  static async hasAccessRight (user, right) {
    const result = await PostgresStore.client.query({
      text: `SELECT 1 FROM ${PlatformRole.tableName} AS r
        LEFT JOIN ${RoleAccessRight.tableName} AS ar ON r.role_id=ar.role_id
      WHERE r.user_id=$1
        AND ar.access_right=$2
      LIMIT 1`,
      values: [user.id, right]
    })
    return !!result.rows.length
  }

  /**
   * @param {Number} userId
   */
  static async remove (userId) {
    await PostgresStore.client.query({
      text: `DELETE FROM ${PlatformRole.tableName} 
        WHERE user_id=$1`,
      values: [userId]
    })
  }

  /**
   * @param {Number} userId
   * @param {Number} roleId
   */
  static async add (userId, roleId) {
    await PostgresStore.client.query({
      text: `INSERT INTO ${PlatformRole.tableName} 
        (user_id, role_id) VALUES ($1, $2)
        ON CONFLICT (user_id, role_id)
        DO UPDATE
         SET role_id = $2
      `,
      values: [userId, roleId]
    })
  }

  static toSqlTable () {
    const User = require('./user.model.js')
    return [`
      CREATE TABLE ${PlatformRole.tableName} (
        user_id INTEGER REFERENCES ${User.tableName}(id),
        role_id INTEGER REFERENCES ${Role.tableName}(id)
      )`,
      `ALTER TABLE ${PlatformRole.tableName} ADD UNIQUE(user_id, role_id)`
    ]
  }

  static async initScript () {
    const User = require('./user.model.js')
    const roles = await Role.getAll()
    const adminRole = roles.find(r => r.name === 'ADMIN')
    const user = await User.getByEmail(config.ADMIN_EMAIL, ['id'])
    await PlatformRole.add(user.id, adminRole.id)
  }
}

/** @type {String} */
PlatformRole.tableName = 'platform_role'

module.exports = PlatformRole