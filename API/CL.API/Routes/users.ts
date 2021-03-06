﻿import {userrepository} from  "../Repositories/userrepository";
import {clResponse} from "../clresponse";
import model = require('../Models/userModel');
import bcrypt = require('bcryptjs');

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

userController.post('/signup', function (req, res) {
    let usrepo = new userrepository();
    let userP: Promise<model.UserModel>;
    let user: model.UserModel;
    let clres: clResponse;

    let salt = bcrypt.genSaltSync(10);
    let hashedP:string = bcrypt.hashSync(req.body.password, salt);

    user = {
        email: req.body.email,
        idCity: req.body.idCity,
        password: hashedP,
        phoneLandLine: req.body.phoneLandline,
        phoneCell: req.body.phoneCell,
        subscriptionOptIn: req.body.subscriptionOptIn
    }
    userP = usrepo.create(user);
    userP.then(function (user: model.UserModel) {
        user.password = undefined;// clear pwd before sending back the result
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

userController.post('/reset', function (req, res) {
    let user = req.body.userName;

});

module.exports = userController;