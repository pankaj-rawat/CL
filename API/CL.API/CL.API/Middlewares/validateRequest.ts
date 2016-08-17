import ld = require('lodash');
import jwt = require('jwt-simple');
import {authRepository} from "../Repositories/authRepository";
import config = require('config');
import *  as model from "../Models/authModel";

module.exports = function (req, res, next) {
    // When performing a cross domain request, you will recieve
    // a preflighted request first. This is to check if the app
    // is safe. 
    // We skip the token outh for [OPTIONS] requests.
    //if(req.method == 'OPTIONS') next();

    var httpStatus_BADREQUEST = 400;
    var httpStatus_FORBIDDEN = 403;
    var httpStatus_UNAUTHORIZED = 401;
    var httpStatus_INTERNALSERVERERROR = 500;

    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

    if (token || key) {
        try {
            var decoded = jwt.decode(token, String(config.get("token.key")));
            if (decoded.exp <= Date.now()) {
                res.status(httpStatus_BADREQUEST);
                res.json({
                    "status": httpStatus_BADREQUEST,
                    "message": "Token Expired"
                });
                return;
            }
            var authRepo = new authRepository();
            // The key would be the logged in user's username
            authRepo.validateUser(key, function (authUser) {
                if (authUser) {
                    if ((req.url.indexOf('clapis') >= 0 && ld.includes(authUser.roles, 'admin'))
                        || (req.url.indexOf('clapis') < 0 && req.url.indexOf('clapi') >= 0)) {
                        next(); // To move to next middleware
                    } else {
                        res.status(httpStatus_FORBIDDEN);
                        res.json({
                            "status": httpStatus_FORBIDDEN,
                            "message": "Not Authorized"
                        });
                        return;
                    }
                } else {
                    // No user with this name exists, respond back with a 401
                    res.status(httpStatus_UNAUTHORIZED);
                    res.json({
                        "status": httpStatus_UNAUTHORIZED,
                        "message": "Invalid User"
                    });
                    return;
                }

            });

        } catch (err) {
            res.status(httpStatus_INTERNALSERVERERROR);
            res.json({
                "status": httpStatus_INTERNALSERVERERROR,
                "message": "Oops something went wrong",
                "error": err
            });
        }
    } else {
        res.status(httpStatus_UNAUTHORIZED);
        res.json({
            "status": httpStatus_UNAUTHORIZED,
            "message": "Invalid Token or Key"
        });
        return;
    }
};