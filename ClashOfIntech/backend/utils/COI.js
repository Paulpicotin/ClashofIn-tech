const pg = require('pg');
const config = require('../server.config.js');
const pgtools = require('pgtools');



class COI {
  /** @type { import('pg').Pool } */
  pool;
  /** @type { import('pg').PoolClient } */
  client;
  
  async init () {
    this.pool = new pg.Pool(config.postgres);
    this.client = await this.pool.connect();
  }

  close () {
    if (this.client) this.client.release();
    this.client = null;
  }

  async reset () {
    const Role = require('../BasedeDonnee/role.model.js');
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
    const user = await this.createAdminUser();
    //await this.createAdmin("firsname", "lastname", "pseudo", "email", "password");
    //await this.runServe();
    //await this.initAdminRole(user);
    

    console.log('bravo ! création des tables réussie');
  }


  async buildTables () {
    const models = require('../BasedeDonnee/model-by-name.js');
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
  /**
   * @returns {Promise<import('../BasedeDonnee/user.model')>}
   */
  async createAdminUser () {
    const User = require('../BasedeDonnee/user.model.js');
    return User.CreateUser({
      COIEmail: config.ADMIN_EMAIL,
      COIPrenom: config.ADMIN_FIRSTNAME,
      COINom: config.ADMIN_LASTNAME,
      COIPseudo: config.ADMIN_FIRSTNAME,
      COIPassword: 'tatayoyo'
    });
  }

  /**
   * @param {import('../BasedeDonnee/user.model')} user
   */
  async initAdminRole (user) {
    const PlatformRole = require('../BasedeDonnee/platform-role.model.js');
    const Role = require('../BasedeDonnee/role.model.js');
    const roles = await Role.getAll();
    const adminRole = roles.find(r => r.name === 'ADMIN');
    await PlatformRole.add(user.id, adminRole.id);
  }


}
module.exports = new COI();