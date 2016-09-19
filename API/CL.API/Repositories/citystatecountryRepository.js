"use strict";
const db = require("../db");
const logger_1 = require("../logger");
class CityRepository {
    find(id) {
        let city;
        return new Promise(function (resolve, reject) {
            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM city WHERE id = ?', id);
                query.on('error', function (err) {
                    logger_1.Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                    reject(err);
                });
                query.on('fields', function (fields) {
                    logger_1.Logger.log.info(fields);
                });
                query.on('result', function (row, result) {
                    try {
                        city =
                            {
                                id: row.id,
                                name: row.name,
                                state: undefined
                            };
                    }
                    catch (err) {
                        logger_1.Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                        reject(err);
                    }
                });
                query.on('end', function (result) {
                    connection.release();
                    let state;
                    //populate state for the city
                    try {
                        if (city != null) {
                            let stateRepo = new StateRepository();
                            stateRepo.find(city.id)
                                .then(function (result) {
                                city.state = state;
                            })
                                .catch(function (err) {
                            });
                        }
                        connection.release();
                        resolve(city);
                    }
                    catch (err) {
                        logger_1.Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + Error);
                        reject(city);
                    }
                });
            });
        });
    }
    getAll() {
        let cities = new Array();
        return new Promise((resolve, reject) => {
            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM city');
                query.on('error', function (err) {
                    logger_1.Logger.log.error("Error while fetching cities. Error:" + err);
                    reject(err);
                });
                query.on('fields', function (fields) {
                    console.log(fields);
                });
                query.on('result', function (row, result) {
                    let state;
                    let city = {
                        id: row.id,
                        name: row.name,
                        state: undefined
                    };
                    //populate state for the city
                    if (row.id != null) {
                        let stateRepo = new StateRepository();
                        stateRepo.find(row.id)
                            .then(function (result) {
                            city.state = result;
                        })
                            .catch(function (err) {
                            logger_1.Logger.log.error("Error while fetching state for city:" + row.id + "Error:" + err);
                        });
                        cities.push(city);
                    }
                });
                query.on('end', function (result) {
                    //alternate way
                    //if (result.rows.length > 0) {
                    //    for (let i = 0, len = result.rows.length; i < len; i++) {
                    //        let row = rows[i];
                    //    }
                    //}
                    connection.release();
                    resolve(cities);
                });
            });
        });
    }
}
exports.cityRepository = CityRepository;
;
class StateRepository {
    find(id) {
        let state;
        return new Promise((resolve, reject) => {
            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM state where id=?', id);
                query.on('error', function (err) {
                    reject(err);
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
                    let ctr;
                    let countryRepo = new CountryRepository();
                    countryRepo.find(state.id)
                        .then(function (result) {
                        state.country = result;
                    })
                        .catch(function (error) {
                        logger_1.Logger.log.error("Error while fetching Country for state:" + state.id + " - " + error);
                    });
                });
                query.on('end', function (result) {
                    connection.release();
                    resolve(state);
                });
            });
        });
    }
    getAll() {
        let states = new Array();
        return new Promise((resolve, reject) => {
            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM state');
                query.on('error', function (err) {
                    logger_1.Logger.log.info('Error occured in StateRepository - getAll Error:' + err);
                    reject(err);
                });
                query.on('fields', function (fields) {
                    console.log(fields);
                });
                query.on('result', function (row, result) {
                    let countryRepo = new CountryRepository();
                    let state = {
                        id: row.id,
                        abbr: row.abbr,
                        name: row.name,
                        country: undefined
                    };
                    countryRepo.find(row.idCountry)
                        .then((result) => {
                        state.country = result;
                    })
                        .catch((err) => {
                        logger_1.Logger.log.info('Error occured while fetching country for state:' + row.name + ' idCountry:' + row.idCountry + ' Error:' + err);
                    });
                    states.push(state);
                });
                query.on('end', function (result) {
                    connection.release();
                    resolve(states);
                });
            });
        });
    }
}
exports.stateRepository = StateRepository;
;
class CountryRepository {
    find(id) {
        return new Promise((resolve, reject) => {
            let country;
            db.get().getConnection(function (err, connection) {
                if (err != null) {
                    logger_1.Logger.log.info('Error occured in CountryRepository - find - id:' + id + '  Error:' + err);
                    reject(err);
                }
                else {
                    let query = connection.query('SELECT * FROM country where id=?', id);
                    query.on('error', function (err) {
                        reject(err);
                    });
                    query.on('fields', function (fields) {
                        logger_1.Logger.log.info(fields);
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
                        resolve(country);
                        connection.release();
                    });
                } //else closing
            });
        });
    }
    getAll() {
        let countries = new Array();
        return new Promise((resolve, reject) => {
            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM country');
                query.on('error', function (err) {
                    logger_1.Logger.log.info('Error occured in CountryRepository - getAll Error:' + err);
                    reject(err);
                });
                query.on('fields', function (fields) {
                    console.log(fields);
                });
                query.on('result', function (row, result) {
                    let country = {
                        id: row.id,
                        abbr: row.abbr,
                        name: row.name
                    };
                    countries.push(country);
                });
                query.on('end', function (result) {
                    resolve(countries);
                    connection.release();
                });
            });
        });
    }
}
exports.countryRepository = CountryRepository;
;
//# sourceMappingURL=citystatecountryRepository.js.map