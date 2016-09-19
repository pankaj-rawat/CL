"use strict";
const CityStateCountryRepository_1 = require("../Repositories/CityStateCountryRepository");
var express = require('express');
var cityController = express.Router();
cityController.get('/:id', function (req, res) {
    let clRes;
    let cscrepo = new CityStateCountryRepository_1.cityRepository();
    try {
        let id = req.params.id;
        cscrepo.find(id)
            .then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        })
            .catch(function (err) {
            clRes = { message: err, isValid: false };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: false };
        res.send(clRes);
    }
});
cityController.get('/', function (req, res) {
    let clRes;
    let cscrepo = new CityStateCountryRepository_1.cityRepository();
    try {
        cscrepo.getAll()
            .then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        })
            .catch(function (err) {
            clRes = { message: err, isValid: false };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: false };
        res.send(clRes);
    }
});
module.exports = cityController;
//# sourceMappingURL=cities.js.map