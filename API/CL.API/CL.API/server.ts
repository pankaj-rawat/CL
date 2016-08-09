import express = require('express');
import bodyParser = require('body-parser');
import * as db from "./db";
import {Logger}  from "./logger";


var app = express();

//load router
require('./router')(app);


// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;        // set our port
process.on('unhandledRejection', (reason, p) => {
    Logger.log.error(reason);
    // application specific logging, throwing an error, or other logic here
});

db.connect(db.MODE_DEV, function (err) {
    if (err) {
        Logger.log.info('Unable to connect to MySQL. Error:' +err);
        process.exit(1)
    } else {
        app.listen(port, function () {
            Logger.log.info('CL api listening at Port:' + port);
        })
    }
})

