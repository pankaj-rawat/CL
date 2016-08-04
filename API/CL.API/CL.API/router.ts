//import ld= require('lodash');
import fs = require('fs');
var notrequired = ['index'];//files which we might need to exclude

module.exports = function (app) {
    var routeDir = __dirname + '/routes';
    fs.readdirSync(routeDir).forEach(function (file) {
        // Remove extension from file name
        var basename = s(file); // file.split('.')[0];        
        //if (!fs.lstatSync(routeDir + '/' + file).isDirectory() && !ld.includes(notrequired, file)) {
        if (!fs.lstatSync(routeDir + '/' + file).isDirectory()) {
            app.use('/' + basename, require('./routes/' + basename));
        }
    });

    function s(file): string {
        var basename = file.split('.')[0];
        return basename;
    }
};