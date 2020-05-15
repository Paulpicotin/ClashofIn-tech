const pg = require('pg')
const config = require('../server.config.js')
const pgtools = require('pgtools')


class COI{
    /** @type { import('pg').Pool} */
    pool
    /** @type { import('pg').PoolClient} */
    client

    async init(){
        this.pool = new pg.Pool(config.postgres)
        this.client = await this.pool.connect()
    }

    async close () {
        if (this.client) this.client.release()
        this.client = null
    }
    async reset (){

        this.init()
        const conf = {
            user: config.postgres.user,
            host: config.postgres.host,
            password: config.postgres.password
        }
        try {
            await pgtools.dropdb(conf, config.postgres.database)
        }catch (err){
            console.log("error but don't care", err)
        }
        
        await pgtools.createdb(conf, config.postgres.database)
        await this.buildTables()
        console.log('bravo ! ca marche')
    }
    async buildTables (){
        const models = require('../BasedeDonnee/model-by-name.js')
        for (const model of models){
            const q = model.toSqlTable()
            if (Array.isArray(q)) {
                for (const query of q){
                    console.log(query)
                    await this.client.query(query)
                }
            }else{
                console.log(q)
                await this.client.query(q)
            }
        }
    }
}

module.exports = new COI()