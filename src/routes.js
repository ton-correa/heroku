const express = require('express');
const routes = express.Router();
const ApiUserController = require("./controllers/ApiUserController");

routes
    .post('/', ApiUserController.create)
    .get('/', ApiUserController.read);

module.exports = routes;