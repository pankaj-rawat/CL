﻿import * as db from "./db";
import config = require('config');
import {Logger}  from "./logger";

//make 'production' for production here or set the environment variable.
var environment = process.env.NODE_ENV || 'dev';
var server = require("./server");

server.set('port', process.env.PORT || config.get('server.port')); //set our port

db.connect(environment, function (err) {
    if (err) {
        Logger.log.info('Unable to connect to MySQL. Error:' + err);
        process.exit(1)
    } else {
        server.listen(server.get('port'), function () {
            Logger.log.info('CL api listening at Port:' + server.get('port'));
        })
    }
})
