var express = require('express');
var router = express.Router();
var Module = require('../models/module.model.js');
const accessRights = require('../models/access-rights.definition.js');
const UserPolicy = require('../models/policies/user.policy.js');
const ModulePolicy = require('../models/policies/module.policy.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/modules', getModule);

router.get('/module/:id', getModules);

module.exports = router;
