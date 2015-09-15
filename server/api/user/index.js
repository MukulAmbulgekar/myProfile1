'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/createUser', controller.createUser);
router.post('/login', controller.login);
router.get('/userInfo/:username', controller.userInfo);
router.post('/updateProfile', controller.updateProfile);
module.exports = router;