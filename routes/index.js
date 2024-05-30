const apiRouter = require("./apiRouter");
const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const pagesRouter = require("./pages");
const usersRouter = require("./users");

module.exports = {
    apiRouter,
    authRouter,
    categoriesRouter,
    gamesRouter,
    pagesRouter,
    usersRouter
};