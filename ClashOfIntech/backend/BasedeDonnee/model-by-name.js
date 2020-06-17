const User = require('./user.model.js');
const Role = require('./role.model.js');
const Attack = require('./attack.model.js');
const Admin = require('./admin.model.js');
const Defense = require('./defense.model.js');
const Town =require ('./town.model.js');
const Cases =require ('./cases.model.js');
const Ressources = require ('./ressources.model.js');
const Building = require ('./building.model.js');
const BuildingRessources = require ('./building_ressources.model.js');
const BuildingAttack = require ('./buildingattack.model.js')


module.exports = [
  User,
  Role,
  Admin,
  Attack,
  Defense,
  Building,
  Town,
  Cases,
  Ressources,
  BuildingAttack,
  BuildingRessources
]
;