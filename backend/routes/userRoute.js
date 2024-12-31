const express = require('express');
const userRouter = express.Router();
const {loginUser,registerUser} = require('../controllers/userController')

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

module.exports = userRouter;