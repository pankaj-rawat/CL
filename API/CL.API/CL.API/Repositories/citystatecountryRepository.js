"use strict";
var db = require("../db");
var CityRepository = (function () {
    function CityRepository() {
    }
    CityRepository.prototype.find = function (id, res) {
        var city;
        db.get().getConnection(function (err, connection) {
            var query = connection.query('SELECT * FROM city WHERE id = ?', id);
            query.on('error', function (err) {
                throw err;
            });
            query.on('fields', function (fields) {
                console.log(fields);
            });
            query.on('result', function (row, result) {
                city =
                    {
                        id: row.id,
                        name: row.name,
                        state: undefined
                    };
            });
            query.on('end', function (result) {
                connection.release();
                var state;
                //populate state for the city
                if (city.id != undefined) {
                    var stateRepo = new StateRepository();
                    stateRepo.find(city.id, function (state) {
                        city.state = state;
                        res(city);
                    });
                }
                else {
                    res(city);
                }
            });
        });
    };
    CityRepository.prototype.getAll = function (res) {
        var cities = new Array();
        var query = db.get().query('SELECT * FROM city');
        query.on('error', function (err) {
            throw err;
        });
        query.on('fields', function (fields) {
            console.log(fields);
        });
        query.on('result', function (row, result) {
            var state;
            //populate state for the city
            if (row.id != undefined) {
                var stateRepo = new StateRepository();
                stateRepo.find(row.id, function (statRes) {
                    this.state = statRes;
                });
            }
            var city = {
                id: row.id,
                name: row.name,
                state: this.state
            };
            cities.push(city);
        });
        query.on('end', function (result) {
            //alternate way
            //if (result.rows.length > 0) {
            //    for (var i = 0, len = result.rows.length; i < len; i++) {
            //        var row = rows[i];
            //    }
            //}
            res(cities);
        });
    };
    return CityRepository;
}());
exports.cityRepository = CityRepository;
;
var StateRepository = (function () {
    function StateRepository() {
    }
    StateRepository.prototype.find = function (id, res) {
        var state;
        db.get().getConnection(function (err, connection) {
            var query = connection.query('SELECT * FROM state where id=?', id);
            query.on('error', function (err) {
                throw err;
            });
            query.on('fields', function (fields) {
                console.log(fields);
            });
            query.on('result', function (row, result) {
                state =
                    {
                        id: row.id,
                        abbr: row.abbr,
                        name: row.name,
                        country: undefined
                    };
            });
            query.on('end', function (result) {
                connection.release();
                var ctr;
                if (state.id != undefined) {
                    var countryRepo = new CountryRepository();
                    countryRepo.find(state.id, function (ctr) {
                        state.country = ctr;
                        res(state);
                    });
                }
                else {
                    res(state);
                }
            });
        });
    };
    StateRepository.prototype.getAll = function (res) {
        var states = new Array();
        var query = db.get().query('SELECT * FROM state');
        query.on('error', function (err) {
            throw err;
        });
        query.on('fields', function (fields) {
            console.log(fields);
        });
        query.on('result', function (row, result) {
            var state = {
                id: row.id,
                abbr: row.abbr,
                name: row.name,
                country: {
                    id: 1,
                    abbr: 'IN',
                    name: 'India'
                }
            };
            states.push(state);
        });
        query.on('end', function (result) {
            res(states);
        });
    };
    return StateRepository;
}());
exports.stateRepository = StateRepository;
;
var CountryRepository = (function () {
    function CountryRepository() {
    }
    CountryRepository.prototype.find = function (id, res) {
        var country;
        db.get().getConnection(function (err, connection) {
            if (err) {
                throw err;
            }
            var query = connection.query('SELECT * FROM country where id=?', id);
            query.on('error', function (err) {
                throw err;
            });
            query.on('fields', function (fields) {
                console.log(fields);
            });
            query.on('result', function (row, result) {
                country =
                    {
                        id: row.id,
                        abbr: row.abbr,
                        name: row.name
                    };
            });
            query.on('end', function (result) {
                res(country);
                connection.release();
            });
        });
    };
    CountryRepository.prototype.getAll = function (res) {
        var countries = new Array();
        db.get().getConnection(function (err, connection) {
            var query = connection.query('SELECT * FROM country');
            query.on('error', function (err) {
                throw err;
            });
            query.on('fields', function (fields) {
                console.log(fields);
            });
            query.on('result', function (row, result) {
                var country = {
                    id: row.id,
                    abbr: row.abbr,
                    name: row.name
                };
                countries.push(country);
            });
            query.on('end', function (result) {
                connection.release();
                res(countries);
            });
        });
    };
    return CountryRepository;
}());
exports.countryRepository = CountryRepository;
;
//# sourceMappingURL=citystatecountryRepository.js.map