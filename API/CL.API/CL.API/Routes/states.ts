import {clResponse} from "../clresponse";
import {stateRepository} from  "../Repositories/CityStateCountryRepository";

var express = require('express');
var stateController = express.Router();

stateController.get('/:id', function (req, res):void {
    let clRes: clResponse;   
    let stateRepo = new stateRepository();
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

stateController.get('/', function (req, res):void {
    let stateRepo = new stateRepository();
    let clRes: clResponse;   
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