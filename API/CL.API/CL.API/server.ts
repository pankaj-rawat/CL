import express = require('express');
import bodyParser = require('body-parser');
import {Logger}  from "./logger";

var app = express();
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var validateRequest = require('./Middlewares/validateRequest');
app.all('/clapis/*', validateRequest);
//load router
require('./router')(app);
process.on('unhandledRejection', (reason,p) => {
    Logger.log.error(reason);
});
module.exports = app;


