"use strict";
const citystatecountryrepository_1 = require("../Repositories/citystatecountryrepository");
var express = require('express');
var countryController = express.Router();
countryController.get('/:id', function (req, res) {
    let cscrepo = new citystatecountryrepository_1.countryRepository();
    let clRes;
    try {
        let id = req.params.id;
        cscrepo.find(id)
            .then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        })
            .catch(function (err) {
            clRes = { message: err.message, isValid: false };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.message, isValid: false };
        res.send(clRes);
    }
});
countryController.get('/', function (req, res) {
    let cscrepo = new citystatecountryrepository_1.countryRepository();
    let clRes;
    try {
        cscrepo.getAll()
            .then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        })
            .catch(function (err) {
            clRes = { message: err.message, isValid: false };
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