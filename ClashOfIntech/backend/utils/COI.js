const pg = require('pg');
const config = require('../server.config.js');
const pgtools = require('pgtools');
const express = require('express');
const uuidV4 = require('uuid').v4;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));


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


/*app.use(bodyParser.json());

/** @type {Array.<{
 *    id: String,
 *    name: String,
 *    password: String,
 *    age: Number
 *  }>}
 
const bdd = [];


app.get('/Users', (req, res) => {
  console.log(req.params.id);
  const users = require('../BasedeDonnee/user.model.js');
  res.send(users.ReturnUsers());


})

app.get('/users', (req, res) => {
  console.log(req.params.id);

  // créer une nouvelle liste en retirant les mot de passe des user.
    const user = bdd.map(user => {
    return { id: user.id, name: user.name, age: user.age };
  });

  // envoie de la liste des user au client.
  res.send(user);
});

app.post('/createUser', (req, res) => {
    console.log(req.body);
  
    // récupération des données de l'utilisateur et attribution d'un id.
    const user = { ...req.body, id: uuidV4() };
    // ajout de l'user dans la liste des users
    bdd.push(user);
  
    // renvoie au client de l'user avec son id.
    res.send({
      id: user.id,
      name: user.name,
      age: user.age
    });
  });

  app.put('/modifyUserAge/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
  
    // recherche de l'user dans la liste à partir de son id.
    const user = bdd.find(user => user.id === req.params.id);
  
    if (user === undefined) {
      // si l'user n'a pas été trouvé, on renvoie 404 "Not Found" au client.
      res.sendStatus(404);
  
    } else {
      // on modifie l'age de l'user
      user.age = req.body.age;
  
      // on renvoie l'user modifié au client.
      res.send({
        id: user.id,
        name: user.name,
        age: user.age
      });
    }
  });
  
  app.delete('/deleteUser/:id', (req, res) => {
    console.log(req.params.id);
  
    // recherche de l'user dans la liste à partir de son id.
    const user = bdd.find(user => user.id = req.params.id);
  
    if (user === undefined) {
      // si l'user n'a pas été trouvé, on renvoie 404 "Not Found" au client.
      res.sendStatus(404);
  
    } else {
      // on trouve la position de l'user dans la liste et on le supprime.
      bdd.splice(bdd.indexOf(user), 1);
      // on renvoie 200 au client, succès de l'opération.
      res.send(200);
    }
  });
  

app.listen(3001);*/