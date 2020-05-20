const express = require('express');
const uuidV4 = require('uuid').v4;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.json());

/** @type {Array.<{
 *    id: String,
 *    name: String,
 *    password: String,
 *    age: Number
 *  }>}
 */
const bdd = [];


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
  

app.listen(3001);