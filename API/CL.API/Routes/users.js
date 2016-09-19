"use strict";
const userrepository_1 = require("../Repositories/userrepository");
const bcrypt = require('bcryptjs');
var express = require('express');
var userController = express.Router();
userController.get('/:id', function (req, res) {
    let userP;
    let userRepo = new userrepository_1.userrepository();
    let clres;
    userP = userRepo.find(req.params.id);
    userP.then(function (user) {
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
    let usrepo = new userrepository_1.userrepository();
    let userP;
    let user;
    let clres;
    let salt = bcrypt.genSaltSync(10);
    let hashedP = bcrypt.hashSync(req.body.password, salt);
    user = {
        email: req.body.email,
        idCity: req.body.idCity,
        password: hashedP,
        phoneLandLine: req.body.phoneLandline,
        phoneCell: req.body.phoneCell,
        subscriptionOptIn: req.body.subscriptionOptIn
    };
    userP = usrepo.create(user);
    userP.then(function (user) {
        user.password = undefined; // clear pwd before sending back the result
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
//# sourceMappingURL=users.js.map