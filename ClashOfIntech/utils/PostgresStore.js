const pg = require('pg')
const config = require('../server.config.js')
const pgtools = require('pgtools')
const myfile = require('../sample_exercises.json')

class PostgresStore{
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
        await this.buildModule()
        console.log('bravo ! ca marche')
    }
    async buildTables (){
        const models = require('../models/model-by-name.js')
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
    async buildModule (){
        console.log("mon nom est sample_exercises")
        const modules = require('../models/modules.model.js')
        await modules.CreateModule("sample_exercises")
        await this.buildTP()
    }

    async buildTP(){
        const tp = require('../models/tp.model.js')
        for(let numTp = 0; numTp < myfile.length; numTp++){
            await tp.CreateTP(myfile[numTp].name)
            console.log("Création du TP " + numTp)
            await this.buildEx(numTp)
        }
    }

    async buildEx(numTP){
        const ex = require('../models/ex.model.js')
        for(let i = 0; i < myfile[numTP].exercises.length; i++){
            await ex.CreateEx(myfile[numTP].exercises[i])
            console.log("Création de l'exercice " + i)
        }
    }
}

module.exports = new PostgresStore()