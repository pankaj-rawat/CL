"use strict";
var citystatecountryrepository_1 = require("../Repositories/citystatecountryrepository");
var express = require('express');
var countryController = express.Router();
countryController.get('/:id', function (req, res) {
    var cscrepo = new citystatecountryrepository_1.countryRepository();
    var clRes;
    try {
        var id = req.params.id;
        cscrepo.find(id, function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.message, isValid: false };
        res.send(clRes);
    }
});
countryController.get('/', function (req, res) {
    var cscrepo = new citystatecountryrepository_1.countryRepository();
    var clRes;
    try {
        cscrepo.getAll(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.message, isValid: false };
        res.send(clRes);
    }
});
module.exports = countryController;
//# sourceMappingURL=countries.js.map