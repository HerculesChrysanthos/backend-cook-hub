const express = require('express');
const router = express.Router();
const { validator } = require('../../middleware/validate');
const userValidator = require('./user.validator');
// const auth = require('../middleware/check-auth');

const userController = require('./user.controller');

router.post(
  '/register',
  validator(userValidator.registerSchema),
  userController.register
);

// router.get('/', userController.getUsers);
// router.post(
//   '/login',
//   // validator(userValidator.loginSchema),
//   userController.login
// );

module.exports = router;
