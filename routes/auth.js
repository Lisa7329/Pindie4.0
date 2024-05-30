const { login } = require("../controllers");
const authRouter = require("express").Router();

authRouter.post("/auth/login", login);

module.exports = authRouter;