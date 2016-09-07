import {cityRepository} from  "../Repositories/CityStateCountryRepository";
import clResponse=require('../clResponse');

var express = require('express');
var cityController = express.Router();

cityController.get('/:id', function (req, res) {
    let clRes: clResponse.clResponse;   
    let cscrepo = new cityRepository();   
    try {
        let id = req.params.id;

        cscrepo.find(id, function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });       
    }
    catch (Error) {
        clRes = { message: Error, isValid: false }
        res.send(clRes);
    }   
});



cityController.get('/', function (req, res) {
    let clRes: clResponse.clResponse;   
    let cscrepo = new cityRepository();
    try {
        cscrepo.getAll(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: false }
        res.send(clRes);
    }
   
});

module.exports = cityController;