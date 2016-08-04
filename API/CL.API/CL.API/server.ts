import express = require('express');
import bodyParser = require('body-parser');

var app = express();

//load router
require('./router')(app);

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;        // set our port

app.listen(port);
console.log('CL api listening at Port:' + port);