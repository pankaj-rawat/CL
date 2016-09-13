import https = require('https');
import * as db from "./db";
import config = require('config');
import {Logger}  from "./logger";

//make 'production' for production here or set the environment variable.
let environment = process.env.NODE_ENV || 'dev';
let server:https.Server = require("./server");
let port: string;
port= process.env.PORT || config.get('server.port'); //set our port


db.connect(environment, function (err) {
    if (err) {
        Logger.log.info('Unable to connect to MySQL. Error:' + err);
        process.exit(1)
    } else {
        server.listen(port, function () {
            Logger.log.info('CL api listening at Port:' + port);
        })
    }
})
