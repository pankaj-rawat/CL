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
            data:user,
            isValid:true
        };
        res.send(clres);
    });

    userP.catch(function (err) {
        clres = {
            isValid:false,
            message: err.message
        };
        res.send(clres);
    });
});

//userController.get('/', function (req, res) {
//    var usrepo = new userrepo.userrepository();
//    var u = usrepo.getAll();
//    res.send(u)
//});

module.exports = userController;