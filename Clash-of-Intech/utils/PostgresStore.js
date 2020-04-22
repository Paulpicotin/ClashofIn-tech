const pg = require('pg');
const config = require('../server.config.js');
const pgtools = require('pgtools');
const myfile = require('../sample_exercises.json');

class PostgresStore {
  async init () {
    this.pool = new pg.Pool(config.postgres);
    this.client = await this.pool.connect();
  }

  async close () {
    if (this.client) this.client.release();
    this.client = null;
  }

  async reset () {
    // this.init()
    const conf = {
      user: config.postgres.user,
      host: config.postgres.host,
      password: config.postgres.password
    };
    try {
      await pgtools.dropdb(conf, config.postgres.database);
    } catch (err) {
      console.log("error but don't care", err);
    }

    await pgtools.createdb(conf, config.postgres.database);

    await this.init();
    await this.buildTables();
    // await this.insertModule()
    console.log('bravo ! ca marche');
  }

  async buildTables () {
    const models = require('../models/model-by-name.js');
    for (const model of models) {
      const q = model.toSqlTable();
      if (Array.isArray(q)) {
        for (const query of q) {
          console.log(query);
          await this.client.query(query);
        }
      } else {
        console.log(q);
        await this.client.query(q);
      }
    }
  }

  async insertModule () {
    const module = require('../models/module.model.js');
    await module.InsertModule('programmation Python');
  }

  static InsertTp () {
    return {
      text: 'INSERT INTO tps (tp, idModule) VALUES ($1, $2)',
      values: [myfile.name, '1']
    };
  }

  async createAdminUser () {
    const User = require('../models/user.model.js');
    return User = await User.create({
      email: config.ADMIN_EMAIL,
      firstName: config.ADMIN_FIRSTNAME,
      lastName: config.ADMIN_LASTNAME,
      password: 'root'
    });
  }
}

module.exports = new PostgresStore()
;
