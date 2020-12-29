const express =require('express');

const routes = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./controllers/UserController');
const TicketsController = require('./controllers/TicketsController');
const ReplysController = require('./controllers/ReplysController');

const upload = multer(multerConfig);

routes.post('/login', UserController.login);
routes.post('/register', UserController.create);
routes.post('/register/admin', UserController.createAdmin);
routes.post('/newticket', TicketsController.create);
routes.post('/ticket/:id', ReplysController.create);


routes.get('/agents', UserController.agents);
routes.get('/alltickets', TicketsController.index);
routes.get('/ticket/:id', TicketsController.show);
routes.get('/mytickets', TicketsController.userTickets);
routes.get('/closedtickets', TicketsController.closedTickets);
routes.get('/assignToAdmins', TicketsController.AssignToAdmins);
routes.get('/inProgress', TicketsController.InProgress);

routes.get('/usersList', UserController.index);


routes.put('/updateUser', upload.single('avatar'), UserController.update);
routes.put('/ticketEdit/:id', TicketsController.ticketEdit);

module.exports = routes;