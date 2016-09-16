import https = require('https');
import express = require('express');
import fs = require('fs');
import bodyParser = require('body-parser');
import {Logger}  from "./logger";
import {RequestValidator} from './Middlewares/requestValidator';
import {RouteBuilder} from './routeBuilder';

var app = express();
var router = new RouteBuilder();
var validateRequest = new RequestValidator();
let key = fs.readFileSync('SSL_CERT/key.pem');
let cert = fs.readFileSync('SSL_CERT/cert.pem');

let httpsServerOption = {
    cert : cert,
    key : key
};


// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/api/*', validateRequest.Validate);
//load router
router.build(app);
process.on('unhandledRejection', (reason,p) => {
    Logger.log.error(reason);
});
process.on('uncaughtException', (reason, p) => {
    Logger.log.error(reason);
});
module.exports = https.createServer(httpsServerOption, app);
