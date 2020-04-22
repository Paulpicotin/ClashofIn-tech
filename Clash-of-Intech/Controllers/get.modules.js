const accessRights = require('../models/access-rights.definition.js');
/*const ModulePolicy = require('../models/policies/module.policy.js');*/
const UserPolicy = require('../models/policies/user.policy.js');
var Module = require('../models/module.model.js');

async function getModules (req, res, next) {
  try {
    if (UserPolicy.hasPlatformAccessRight(req.session.userID, accessRights.module.view)) {
      res.json(await Module.getAll());
      return;
    }

    res.json(await Module.getbyUserId(req.session.userId));
  } catch (err) {
    next(err);
  }
}

module.exports = getModules
;
