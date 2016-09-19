"use strict";
const ld = require('lodash');
const fs = require('fs');
const logger_1 = require("./logger");
class RouteBuilder {
    build(app) {
        let notrequired = []; //files which we might need to exclude
        //let publicRoutes: string[] = ['auth.js'];//public route
        let routeDir = __dirname + '/routes';
        logger_1.Logger.log.info('routes folder:' + routeDir);
        // create route for authentication, 
        fs.readdirSync(routeDir).forEach(function (file) {
            //exclude .ts and .map in dev env.
            if (!fs.lstatSync(routeDir + '/' + file).isDirectory()
                && getFileExtension(file) === 'js'
                && !ld.includes(notrequired, file)) {
                let basename = getBaseFileName(file);
                let route = '/api/';
                if (basename != 'auth') {
                    route = '/api/' + basename; // for auth, route will be defined in controller.
                }
                let routeController = './routes/' + basename;
                app.use(route, require(routeController));
                logger_1.Logger.log.info('route added: route:' + route + ' || router:' + routeController);
            }
        });
        function getBaseFileName(file) {
            let basename = file.split('.')[0];
            return basename;
        }
        function getFileExtension(file) {
            let temp = file.split('.');
            return temp[temp.length - 1];
        }
    }
    ;
}
exports.RouteBuilder = RouteBuilder;
//# sourceMappingURL=routeBuilder.js.map