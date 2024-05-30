const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers');
const { sendMe } = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, hashPassword, checkAuth } = require('../middlewares');

usersRouter.get('/users',
    findAllUsers,
    sendAllUsers
);
usersRouter.get("/users/:id",
    findUserById,
    sendUserById
);
usersRouter.get("/me",
    checkAuth,
    sendMe
);
usersRouter.post('/users',
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put('/users/:id',
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete("/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;