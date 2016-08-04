import userrepo = require('../Repositories/userrepository');

var express = require('express');
var userController = express.Router();

userController.get('/1', function (req, res) {
    var usrepo = new userrepo.userrepository();
    var u = usrepo.find(1);
    res.send(u)
});

userController.get('/', function (req, res) {
    var usrepo = new userrepo.userrepository();
    var u = usrepo.getAll();
    res.send(u)
});

module.exports = userController;