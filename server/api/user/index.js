'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/createUser', controller.createUser);

module.exports = router;