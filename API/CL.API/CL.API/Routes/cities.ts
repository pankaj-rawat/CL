import repo = require('../Repositories/citystatecountryrepository');

var express = require('express');
var cityController = express.Router();

cityController.get('/1', function (req, res) {
    var cscrepo = new repo.cityRepository();
    var u = cscrepo.find(1);
    res.send(u)
});

cityController.get('/', function (req, res) {
    var cscrepo = new repo.cityRepository();
    var u = cscrepo.getAll();
    res.send(u)
});

module.exports =cityController;