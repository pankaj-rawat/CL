import ld = require('lodash');
import fs = require('fs');
import {Logger}  from "./logger";

var notrequired = [];//files which we might need to exclude
var publicRoutes = ['auth.js'];//public route

module.exports = function (app) {
    var routeDir = __dirname + '/routes';
    Logger.log.info('routes folder:' + routeDir);
    // create route for authentication, 


    fs.readdirSync(routeDir).forEach(function (file) {
        //exclude .ts and .map in dev env.
        if (!fs.lstatSync(routeDir + '/' + file).isDirectory()
            && getFileExtension(file) === 'js'
            && !ld.includes(notrequired, file)) {
            let basename = getBaseFileName(file);
            let route = '';
            if (ld.includes(publicRoutes, file)) {
                //public route
                route = '/clapi/' + basename;
            }
            else {
                //secured route, required authentication               
                route = '/clapis/' + basename;               
            }
            let routeController = './routes/' + basename;
            app.use(route, require(routeController));
            Logger.log.info('route added: route:' + route + ' || router:' + routeController);
        }
    });


    function getBaseFileName(file): string {
        var basename = file.split('.')[0];
        return basename;
    }
    function getFileExtension(file): string {
        var temp = file.split('.');
        return temp[temp.length - 1];
    }
};