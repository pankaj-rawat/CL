import express = require('express');
import {clResponse} from "../clresponse";
import {authRepository} from "../Repositories/authRepository";
import * as model from "../Models/authModel";
import {Logger}  from "../logger";

var authController = express.Router();
authController.post('/login', function (req, res) {
    Logger.log.info('login requested: ' + req);
    var clRes: clResponse;
    var authrepo = new authRepository();
    try {        
        var username= req.body.username;
        var password= req.body.password;
        authrepo.login(username,password, function (result:model.AuthModel) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: false }
        res.send(clRes);
    }
});

module.exports = authController;