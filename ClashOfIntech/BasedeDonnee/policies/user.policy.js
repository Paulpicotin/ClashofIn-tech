const PostgresStore = require('../../utils/PostgresStore.js')
const PlatformRole = require ('../platform-role.model.js')
const RoleAccessRight = require('../role-access-right.model.js')



class UserPolicy {
    static async hasPlatformAccessRight(userId, right) {
        const result = await PostgresStore.client.query({
            text: `SELECT 1 from ${PlatformRole.tableName} AS pr
            LEFT JOIN ${RoleAccessRight} AS ar ON pr.role_id = ar.role_id
            WHERE pr.user_id =$1
            AND arguments.access_right = $2`,
            values: [userId, right]
        })
        if (result.rows.length > 0){
            return true
        }
        return false
    }
}
module.exports = UserPolicy