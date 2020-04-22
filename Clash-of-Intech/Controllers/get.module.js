const accessRights = require('../models/access-rights.definition.js');
const ModulePolicy = require('../models/policies/module.policy.js');
var Module = require('../models/module.model.js');

async function getModule (req, res) {
  const moduleId = parseInt(req.params.id);
  if (!await ModulePolicy.hasAccessRight(req.session.userId, moduleId, accessRights.module.participate)) {
    res.status(401)
      .send('Unauthorized');
    return;
  }
  res.json(await Module.getById(moduleId));
}

module.exports = getModule;
