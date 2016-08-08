"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var db = require("./db");
var app = express();
//load router
require('./router')(app);
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080; // set our port
db.connect(db.MODE_DEV, function (err) {
    if (err) {
        console.log('Unable to connect to MySQL.');
        process.exit(1);
    }
    else {
        app.listen(port, function () {
            console.log('CL api listening at Port:' + port);
        });
    }
});
//# sourceMappingURL=server.js.map