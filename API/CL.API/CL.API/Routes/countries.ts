import repo = require('../Repositories/citystatecountryrepository');

var express = require('express');
var countryController = express.Router();

countryController.get('/1', function (req, res) {
    var cscrepo = new repo.countryRepository();
    var u = cscrepo.find(1);
    res.send(u)
});

countryController.get('/', function (req, res) {
    var cscrepo = new repo.countryRepository();
    var u = cscrepo.getAll();
    res.send(u)
});

module.exports = countryController;