import {userrepository} from  "../Repositories/userrepository";
import {clResponse} from "../clresponse";
import model = require('../Models/userModel');

var express = require('express');
var userController = express.Router();

userController.get('/:id', function (req, res) {
    let userP: Promise<model.UserModel>;
    let userRepo = new userrepository();
    let clres: clResponse;
    userP = userRepo.find(req.params.id);
    userP.then(function (user: model.UserModel) {
        clres = {
            data: user,
            isValid: true
        };
        res.send(clres);
    });

    userP.catch(function (err) {
        clres = {
            isValid: false,
            message: err.message
        };
        res.send(clres);
    });
});

userController.post('/', function (req, res) {
    let usrepo = new userrepository();
    let userP: Promise<model.UserModel>;
    let user: model.UserModel;
    let clres: clResponse;
    user = {
        email: req.body.email,
        idCity: req.body.idCity,
        password: req.body.password,
        phoneLandLine: req.body.phoneLandline,
        phoneCell: req.body.phoneCell,
        subscriptionOptIn: req.body.subscriptionOptIn
    }
    userP = usrepo.create(user);
    userP.then(function (user: model.UserModel) {
        clres = {
            data: user,
            isValid: true
        };
        res.send(clres);
    });
    userP.catch(function (err) {
        clres = {
            isValid: false,
            message: err.mssage
        };
        res.send(clres);
    });
});

module.exports = userController;