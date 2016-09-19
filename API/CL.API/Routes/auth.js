"use strict";
const express = require('express');
const authRepository_1 = require("../Repositories/authRepository");
const logger_1 = require("../logger");
var authController = express.Router();
authController.post('/login', function (req, res) {
    logger_1.Logger.log.info('login requested: ' + req);
    let clRes;
    let authrepo = new authRepository_1.authRepository();
    try {
        let username = req.body.username;
        let password = req.body.password;
        let response = authrepo.login(username, password);
        response.then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
        response.catch(function (error) {
            clRes = { message: error.message, isValid: false };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: false };
        res.send(clRes);
    }
});
module.exports = authController;
//# sourceMappingURL=auth.js.map