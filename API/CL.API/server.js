"use strict";
const https = require('https');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const logger_1 = require("./logger");
const requestValidator_1 = require('./Middlewares/requestValidator');
const routeBuilder_1 = require('./routeBuilder');
var app = express();
var router = new routeBuilder_1.RouteBuilder();
var validateRequest = new requestValidator_1.RequestValidator();
let key = fs.readFileSync('SSL_CERT/key.pem');
let cert = fs.readFileSync('SSL_CERT/cert.pem');
let httpsServerOption = {
    cert: cert,
    key: key
};
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/api/*', validateRequest.Validate);
//load router
router.build(app);
process.on('unhandledRejection', (reason, p) => {
    logger_1.Logger.log.error(reason);
});
process.on('uncaughtException', (reason, p) => {
    logger_1.Logger.log.error(reason);
});
module.exports = https.createServer(httpsServerOption, app);
//# sourceMappingURL=server.js.map