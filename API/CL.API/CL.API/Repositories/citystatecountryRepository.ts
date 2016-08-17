import * as irepo from "../Interfaces/ICityStateCountryRepository";
import * as model from "../Models/citystatecountryModel";
import * as db from "../db";
import {Logger}  from "../logger";

class CityRepository implements irepo.ICityRepository {
    find(id: number, res: (city: model.CityModel) => void) {
        let city: model.CityModel;
        db.get().getConnection(function (err, connection) {
            let query = connection.query('SELECT * FROM city WHERE id = ?', id);
            query.on('error', function (err) {
                Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
            });

            query.on('fields', function (fields) {
                Logger.log.info(fields);
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
                    Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                }
            });

            query.on('end', function (result) {
                connection.release();
                let state: model.StateModel;
                //populate state for the city
                try {
                    if (city != null) {
                        let stateRepo = new StateRepository();
                        stateRepo.find(city.id, function (state) {
                            city.state = state;
                            res(city);
                        });
                    }
                    else {
                        res(city);
                    }
                }
                catch (err) {
                    Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + Error);
                    res(city);
                }
            });
        });
    }
    getAll(res: (city: Array<model.CityModel>) => void) {
        let cities: Array<model.CityModel> = new Array<model.CityModel>();
        let query = db.get().query('SELECT * FROM city');
        query.on('error', function (err) {
            throw err;
        });

        query.on('fields', function (fields) {
            console.log(fields);
        });

        query.on('result', function (row, result) {
            let state: model.StateModel;
            //populate state for the city
            if (row.id != null) {
                let stateRepo = new StateRepository();
                stateRepo.find(row.id, function (statRes) {
                    this.state = statRes;
                });
            }
            let city: model.CityModel =
                {
                    id: row.id,
                    name: row.name,
                    state: this.state
                };
            cities.push(city);
        });

        query.on('end', function (result) {
            //alternate way
            //if (result.rows.length > 0) {
            //    for (let i = 0, len = result.rows.length; i < len; i++) {
            //        let row = rows[i];
            //    }
            //}
            res(cities);
        });
    }
};

class StateRepository implements irepo.IStateRepository {
    find(id: number, res: (state: model.StateModel) => void): void {
        let state: model.StateModel;
        try {

            db.get().getConnection(function (err, connection) {
                let query = connection.query('SELECT * FROM state where id=?', id);
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
                    let ctr: model.CountryModel;
                    if (state != null) {
                        let countryRepo = new CountryRepository();
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
        }
        catch (Error)
        {
            res(state); 
        }
    }
    getAll(res: (state: Array<model.StateModel>) => void): void {
        let states: Array<model.StateModel> = new Array<model.StateModel>();
        let query = db.get().query('SELECT * FROM state');
        query.on('error', function (err) {
            throw err;
        });

        query.on('fields', function (fields) {
            console.log(fields);
        });

        query.on('result', function (row, result) {
            let state: model.StateModel =
                {
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
    }
};

class CountryRepository implements irepo.ICountryRepository {
    find(id: number, res: (country: model.CountryModel) => void): void {
        let country: model.CountryModel;
        db.get().getConnection(function (err, connection) {
            if (err) {
                throw err;
            }
            let query = connection.query('SELECT * FROM country where id=?', id);
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


    }
    getAll(res: (countries: Array<model.CountryModel>) => void): void {
        let countries: Array<model.CountryModel> = new Array<model.CountryModel>();
        db.get().getConnection(function (err, connection) {
            let query = connection.query('SELECT * FROM country');
            query.on('error', function (err) {
                throw err;
            });

            query.on('fields', function (fields) {
                console.log(fields);
            });

            query.on('result', function (row, result) {
                let country: model.CountryModel =
                    {
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
    }
};

export {CityRepository as cityRepository };
export {StateRepository as stateRepository };
export {CountryRepository as countryRepository };