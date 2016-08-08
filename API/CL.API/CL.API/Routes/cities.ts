﻿import {cityRepository} from  "../Repositories/CityStateCountryRepository";
import clResponse=require('../clResponse');

var express = require('express');
var cityController = express.Router();

cityController.get('/:id', function (req, res) {
    var clRes: clResponse.clResponse;   
    var cscrepo = new cityRepository();   
    try {
        var id = req.params.id;

        cscrepo.find(id, function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });       
    }
    catch (Error) {
        clRes = { message: Error, isValid: true }
        res.send(clRes);
    }   
});



cityController.get('/', function (req, res) {
    var clRes: clResponse.clResponse;   
    var cscrepo = new cityRepository();
    try {
        cscrepo.getAll(function (result) {
            clRes = { data: result, isValid: true };
            res.send(clRes);
        });
    }
    catch (Error) {
        clRes = { message: Error, isValid: true }
        res.send(clRes);
    }
   
});

module.exports = cityController;