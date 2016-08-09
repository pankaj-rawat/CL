//import ld= require('lodash');
import fs = require('fs');
import {Logger}  from "./logger";

var notrequired = ['index'];//files which we might need to exclude

module.exports = function (app) {
    var routeDir = __dirname + '/routes';
    Logger.log.info('routes folder:' + routeDir);
    fs.readdirSync(routeDir).forEach(function (file) {
        // Remove extension from file name
        var basename = s(file); // file.split('.')[0];        
        //if (!fs.lstatSync(routeDir + '/' + file).isDirectory() && !ld.includes(notrequired, file)) {
        if (!fs.lstatSync(routeDir + '/' + file).isDirectory()) {
            let route = '/' + basename;
            let routeController = './routes/' + basename;
            app.use(route, require(routeController));
            Logger.log.info('route added: route:' + route + 'router:' + routeController);
        }
    });

    function s(file): string {
        var basename = file.split('.')[0];
        return basename;
    }
};