const PostgresStore = require('../../utils/PostgresStore.js')
const Module = require('../module.model.js')
const ModuleUserRole = require('../module-user-role.model.js')
const RoleAccessRight = require('../role-access-right.model.js')
const UserPolicy = require('./user.policy.js')

class ModulePolicy{

    static async hasAccessRight (userId, moduleId, right) {

        if (UserPolicy.hasPlatformAccessRight(userId, right)) return true
    
        const result = await PostgresStore.client.query({
    
          text: `
          SELECT 1 FROM ${Module.tableName} AS m
            LEFT JOIN ${ModuleUserRole.tableName} AS r ON m.id = r.module_id
            LEFT JOIN ${RoleAccessRight.tableName} AS ar ON r.role_id = ar.role_id
          WHERE m.id = $1
            AND r.user_id = $2
            AND ar.access_right = $3
          LIMIT 1`,
          values: [moduleId, userId, right]
        })
    
        return !!result.rows.length
    
      }
}

module.exports = ModulePolicy