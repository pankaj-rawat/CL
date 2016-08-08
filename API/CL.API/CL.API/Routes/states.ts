﻿import {clResponse} from "../clresponse";
import {stateRepository} from  "../Repositories/CityStateCountryRepository";

var express = require('express');
var stateController = express.Router();

stateController.get('/:id', function (req, res):void {
    var clRes: clResponse;   
    var stateRepo = new stateRepository();
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

stateController.get('/', function (req, res):void {
    var stateRepo = new stateRepository();
    var clRes: clResponse;   
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