"use strict";
const db = require("./db");
const config = require('config');
const logger_1 = require("./logger");
//make 'production' for production here or set the environment variable.
let environment = process.env.NODE_ENV || 'development';
let server = require("./server");
let port;
port = config.get('server.port') || process.env.PORT; //set our port
db.connect(environment, function (err) {
    if (err) {
        logger_1.Logger.log.info('Unable to connect to MySQL. Error:' + err);
        process.exit(1);
    }
    else {
        server.listen(port, function () {
            logger_1.Logger.log.info('CL api listening at Port:' + port);
        });
    }
});
//# sourceMappingURL=index.js.map