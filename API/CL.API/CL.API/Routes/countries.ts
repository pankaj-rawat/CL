import {countryRepository} from "../Repositories/citystatecountryrepository";
import {clResponse} from "../clresponse";

var express = require('express');
var countryController = express.Router();

countryController.get('/:id', function (req, res) {
    let cscrepo = new countryRepository();
    let clRes: clResponse; 
    try {
        let id = req.params.id;
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
    let cscrepo = new countryRepository();
    let clRes: clResponse;
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