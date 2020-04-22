const PostgresStore = require('../utils/PostgresStore.js')
const config = require('../server.config.js')
const Role = require ('./role.model.js')

class User {

    constructor (obj) {
        this.id = obj.id
        this.firstname = obj.firstname
        this.lastname = obj.lastname
        this.email = obj.email
        this.password = obj.password
    }

    static async getAll (page, size, scope){
        const fields = scope.map(s => {
            if (s === 'role'){
                return 'r.id AS role'
            }
            return 'u.${s} AS ${s}'
        })
        const result = await PostgresStore.client.query({
            text: `SELECT ${fields.join(',')}
            FROM ${User.tableName} AS u
            LEFT JOIN ${PlateformRole.tableName} as return new Promise((resolve, reject) => {
                ON pr.role_id = r.id
            ORDER BY u.id
            OFFSET $1
            LIMIT $2`,
            values: [page * size, (page +1) *size]
            });
            console.log('result.rows', result.rows)
            return result.rows
        }
    }

    static async getByEmail (email, scope) {
        const result = await PostgresStore.client.query({
            text: `SELECT ${scope.join(', ')} FROM ${User.tableName} WHERE email=$1`,
            values: [email]
        })
        return result.rows[0] || null
    }

    static preparePassport (passport){
        passport.use(new LocalStrategy(async (email, password, cb) => {
            try {
                const user = await User.isUserValid(email, password)
                if (user) {
                    user.role = await User.getRoles(user)
                    cb(null, user)
                }else{
                    cb(null, false)
                }
            }
            catch (err){
                cb(err)
            }
        }))

        passport.serilaizeUser((user, cb) => cb(null, user.id))
        passport.deserializeUser(async (id, cb)=>{
            try {
                const user = await User.findById(id)
                if (user){
                    user.role = await User.getRoles(user)
                    cb(null, user)
                }
                else {
                    cb(null, false)
                }
            }
            catch (err) {
                cb(err)
            }
        })
    }

    static async getRoles (user) {
        const RoleAccessRight = require('./role-access-right.model.js')
        const role = await PlatformRole.getUserRole(user)
        if (role) {
            const rights = await RoleAccessRight.getByRoleId(role.id)
            return {
                id: role.id,
                name: role.name,
                rights: rights.map(r => r.access_right)
            }
        }
        return {id: -1, name: 'NONE', rights: []}
    }

    static async findById (id) {
        if (typeof id !== 'number') throw new Error('TypeError: id is not a number')

        const result = await PostgresStore.client.query({
            text: 'SELECT id, firstname, lastname, email FROM ${USER.tableName} WHERE id=$1',
            values: [id]
        })
        return new User(result.rows[0])
    }

    static async isUserValid (email, password){
        if (typeof email != 'string' || typeof password !== 'string'){
            throw new Error('TypeError: email or password are undefined')
        }
        const result = await PostgresStore.client.query({
            text: 'SELECT * FROM users WHERE email=$1 LIMIT 1',
            values : [email]
        })

        if (result.rows.length ===0){
            return null
        }

        const userRow = result.rows[0]
        const givenPassword = userRow.password
        delete userRow.password
        return await bcrypt.compare(password, givenPassword)
            ? userRow
            : null
    }

    static asunc update (id, params) {
        if (Object.keys (params).length === 0) return null
        console.log('params', params)

        const fields = Object.keys(params)
        .filter(_ => _ !== 'id' && _ !== 'creation_date' && !_.match(/[^a-z_]/))

        let variables = fields.map(_, 1)=> '$${i-1}').join(',')
        const values = fields.map(_=> params[_])
        let fieldNames = fields.join(',')

        if (values.length = 1) {
            fieldNames = ($(fieldNames))
            variables = (${variables})
        }
        values.push(id)

        const result = await PostgresStore.client.query({
            text: `UPDATE $(User.tableName) SET $(fieldNames) = $(variables)
            WHERE id=$$(values.length) RETURNING = `,
            values
        })
        debug('result', result.rows[0])
        return result.rows[0]
    }

    static toSqlTable(){
        return `CREATE TABLE ${user.tableName}(
            id INT PRIMARY KEY NOT NULL,
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            email VARCHAR(255),
            password VARCHAR(255)
        );
        ` 
    }

    static async InsertModule(name){
        const result = await PostgresStore.client.query({
            text : 'INSERT INTO modules (name) VALUES ($1)',
            values : [name]
        })
        return result.rows[0]
    }
}

static async getByEmail (email, scope){
    const fields = scope.join(',')
    const result = await PostgresStore.pool.query({
        text: 'SELECT $(fields) FROM ${User.tableName}

    })
}




/**@type {String}  */
user.tableName = 'user'

module.exports = user