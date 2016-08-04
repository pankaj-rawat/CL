import repo = require('../Repositories/citystatecountryrepository');

var express = require('express');
var stateController = express.Router();

stateController.get('/1', function (req, res) {
    var cscrepo = new repo.stateRepository();
    var u = cscrepo.find(1);
    res.send(u)
});

stateController.get('/', function (req, res) {
    var cscrepo = new repo.stateRepository();
    var u = cscrepo.getAll();
    res.send(u)
});

module.exports = stateController;