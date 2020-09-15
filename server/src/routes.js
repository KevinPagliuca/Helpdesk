const express =require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TicketsController = require('./controllers/TicketsController');


routes.get('/login', UserController.login);
routes.post('/register', UserController.create);

routes.post('/newticket', TicketsController.create);

module.exports = routes;