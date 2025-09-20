const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/users');

userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.postAddUser);
userRouter.get('/:id', UserController.getUserById)
userRouter.put('/:id', UserController.updateUserById);
userRouter.delete('/:id', UserController.deleteUserById);

module.exports = userRouter;