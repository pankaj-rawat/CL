import express = require('express');
import ld = require('lodash');
import fs = require('fs');
import {Logger}  from "./logger";

export class RouteBuilder {
    build(app: express.Express) {
        let notrequired: string[] = [];//files which we might need to exclude
        let publicRoutes: string[] = ['auth.js'];//public route
        let routeDir = __dirname + '/routes';
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
                    if (basename === 'auth') {
                        route = '/clapi/'; // will be handled from controller/route
                    }
                    else {
                        route = '/clapi/' + basename;
                    }
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
            let basename = file.split('.')[0];
            return basename;
        }
        function getFileExtension(file): string {
            let temp = file.split('.');
            return temp[temp.length - 1];
        }
    };
}