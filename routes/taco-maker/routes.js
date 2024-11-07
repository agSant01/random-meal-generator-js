var express = require('express');
var handler = require('./handler');
var responseFormatter = require('./../../middlewares/output-format');

var router = express.Router();

router.get('/', handler.welcome);

router.get('/menu', handler.getMenu, responseFormatter.outputFormat);

module.exports = router;
