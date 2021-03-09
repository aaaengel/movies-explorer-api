const routes = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require("./auth");
const authMiddleware = require("../middlewares/auth")
const {NotFound} = require("../errors")
routes.use('/', authRouter);


routes.use('/users', authMiddleware, usersRouter);

routes.use('/movies', authMiddleware, moviesRouter);

routes.use('/*', () => {
  throw new NotFound('запрашиваемый ресур не найден');
});

module.exports = routes;