import express = require('express');
import {clResponse} from "../clresponse";
import {authRepository} from "../Repositories/authRepository";
import * as model from "../Models/authModel";
import {Logger}  from "../logger";

var authController = express.Router();
authController.post('/login', function (req, res) {
    Logger.log.info('login requested: ' + req);
    let clRes: clResponse;
    let authrepo = new authRepository();
    try {        
        let username= req.body.username;
        let password= req.body.password;
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