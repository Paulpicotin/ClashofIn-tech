var express = require('express');
var router = express.Router();
const uuidV4 = require('uuid').v4;
const admin = require('../BasedeDonnee/admin.model.js');



async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next(); // routereler next() routerelle la prochaine fonction dans la liste des middlewares
    return;
  }
  res.status(401).send('unauthorized(1)');
}

  router.post('/createAdmin', async (req, res) => {
    console.log(req.body);

    //créer un nouvel admin 
    const user = { ...req.body};
      await admin.CreateAdmin(user.firstname, user.lastname, user.pseudo, user.email, user.password);
      console.log("Création de l'admin");
    
  
    // renvoie au client de l'user
    res.send({
      firstname: user.firstname,
      lastname: user.lastname,
      speudo: user.speudo,
      email: user.email,
      password: user.password
    });
  });
  
  /*router.get('/users', (req, res) => {
    console.log(req.params.id);
  
    // créer une nouvelle liste en retirant les mot de passe des user.
      const user = bdd.map(user => {
      return { id: user.id, name: user.name, age: user.age };
    });
  
    // envoie de la liste des user au client.
    res.send(user);
  });
  
  router.post('/createUser', (req, res) => {
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
  
    router.put('/modifyUserAge/:id', (req, res) => {
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
    
    router.delete('/deleteUser/:id', (req, res) => {
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
    });*/




module.exports = router;