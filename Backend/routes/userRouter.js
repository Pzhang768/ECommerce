const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/profile', userController.getUserInfo);

module.exports = userRouter;