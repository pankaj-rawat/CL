"use strict";
const CityStateCountryRepository_1 = require("../Repositories/CityStateCountryRepository");
var express = require('express');
var stateController = express.Router();
stateController.get('/:id', function (req, res) {
    let clRes;
    let stateRepo = new CityStateCountryRepository_1.stateRepository();
    let id = req.params.id;
    try {
        stateRepo.find(id)
            .then(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        })
            .catch(function (err) {
            clRes = { message: err.meassage, isValid: false };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.meassage, isValid: false };
        res.send(clRes);
    }
});
stateController.get('/', function (req, res) {
    let stateRepo = new CityStateCountryRepository_1.stateRepository();
    let clRes;
    try {
        stateRepo.getAll()
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
module.exports = stateController;
//# sourceMappingURL=states.js.map