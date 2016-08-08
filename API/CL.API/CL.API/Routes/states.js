"use strict";
var CityStateCountryRepository_1 = require("../Repositories/CityStateCountryRepository");
var express = require('express');
var stateController = express.Router();
stateController.get('/:id', function (req, res) {
    var clRes;
    var stateRepo = new CityStateCountryRepository_1.stateRepository();
    var id = req.params.id;
    try {
        stateRepo.find(id, function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.meassaage, isValid: false };
        res.send(clRes);
    }
});
stateController.get('/', function (req, res) {
    var stateRepo = new CityStateCountryRepository_1.stateRepository();
    var clRes;
    try {
        stateRepo.getAll(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error.meassaage, isValid: false };
        res.send(clRes);
    }
});
module.exports = stateController;
//# sourceMappingURL=states.js.map