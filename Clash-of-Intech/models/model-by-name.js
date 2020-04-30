const User = require('./user.model.js');
const Role = require('./role.model.js');
const Attack = require('./attack.model.js');
const Admin = require('./admin.model.js');
const Defense = require('./defense.model.js');
const Case = require('./case.model.js');
const Town =require ('./town.model.js');
const Ressources = require ('./require.model.js');
const Building = require ('./building.model.js')

module.exports = [
  User,
  Role,
  Admin,
  Attack,
  Defense,
  Building,
  Case,
  Town,
  Ressources
  

]
;