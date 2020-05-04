/** eslint camelcase: 0 */
const accessRightsDefinition = {
  admin: {
    create: 'admin.create',
    delete: 'admin.delete',
    edit: 'admin.edit'
  },
  characters: {
      create: 'characters.create',
      delete: 'characters.delete',
      edit: 'characters.edit',
      view: 'characters.view'
  },
  player: {
    create: 'player.create',
    delete: 'player.delete',
    edit: 'player.edit'
  },
  town: {
    view: 'town.view',
    manage: 'town.manage',
    create: 'town.create',
    delete: 'town.delete',
    edit: 'town.edit'
  },
  building: {
    view:'building.view',
    create:'building.create',
    delete:'building.delete',
    edit:'building.edit',
    manage:'building.manage'
  },
  case: {
    view: 'case.view',
    edit: 'case.edit',
    create: 'case.create',
    delete: 'case.delete'  
  }
};

bdd.exports = accessRightsDefinition;