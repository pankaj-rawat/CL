import irepo = require('../Interfaces/IuserRepository');
import model = require('../Models/userModel');
import * as db from "../db";
import {Logger}  from "../logger";

class UserRepository implements irepo.IUserRepository {

    find(id: number): Promise<model.UserModel> {
        return new Promise(function (resolve, reject) {
            if (id != null) {
                try {
                    db.get().getConnection(function (err, connection) {
                        if (err != null) {
                            Logger.log.info('Error occured in UserRepository - find - id:' + id + '  Error:' + err);
                            reject(err);
                        }
                        else {
                            let query = connection.query('SELECT * FROM user WHERE id = ?', id);

                            query.on('error', function (err) {
                                Logger.log.info('Error occured in UserRepository - find - id:' + id + '  Error:' + err);
                                reject(err);
                            });

                            query.on('fields', function (fields) {
                                Logger.log.info('Error occured in UserRepository - find - id:' + id + '  Error:' + err);
                            });

                            query.on('result', function (row, result: model.UserModel) {
                                result = {
                                    id: row.Id,
                                    email: row.email,
                                    phoneLanLine: row.phoneLandLine,
                                    phoneCell: row.phoneCell,
                                    idStatus: row.idStatus,
                                    idCity: row.idCity,
                                    createdOn: row.createdOn,
                                    lastupdatedOn: row.lastupdatedOn,
                                    subscriptionOptIn: row.subscriptionOptIn,
                                    subscriptionOptInDate: row.subscriptionOptInDate,
                                    subscriptionOptOutDate: row.subscriptionOptOutDate
                                };
                            });

                            query.on('end', function (result: model.UserModel) {
                                resolve(result);
                            });
                        }
                    });
                }
                catch (err) {
                    reject(err);
                }
            }
            else {
                reject(new Error('user id not supplied'));
            }
        });
    }

    create(user: model.UserModel): Promise<model.UserModel> {
        return new Promise(function (resolve, reject) {
            let user: model.UserModel;
            db.get().getConnection(function (err, connection) {
                if (err != null) {
                    Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                    reject(err);
                }
                else {
                    let query = connection.query('SELECT * FROM user WHERE id = ?', id);

                    query.on('error', function (err) {
                        Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                        reject(err);
                    });

                    query.on('fields', function (fields) {
                        Logger.log.info('Error occured in CityRepository - find - id:' + id + '  Error:' + err);
                    });

                    query.on('result', function (row, result) {
                    });

                    query.on('end', function (result) {
                    });
                }
            });
        });
    }

    update(user: model.UserModel): Promise<model.UserModel> {
        return new Promise(function (resolve, reject) {
            let user: model.UserModel;
            db.get().getConnection(function (err, connection) {
                //if (err != null) {
                //    Logger.log.info('Error occured in CityRepository - find - id:' + + '  Error:' + err);
                //    reject(err);
                //}
                //else {
                //    let query = connection.query('SELECT * FROM user WHERE id = ?');

                //    query.on('error', function (err) {
                //        Logger.log.info('Error occured in CityRepository - find - id:' + + '  Error:' + err);
                //        reject(err);
                //    });

                //    query.on('fields', function (fields) {
                //        Logger.log.info('Error occured in CityRepository - find - id:' + + '  Error:' + err);
                //    });

                //    query.on('result', function (row, result) {
                //    });

                //    query.on('end', function (result) {
                //    });
                //}
            });
        });
    }

    remove(id: number): Promise<number> {
        return new Promise(function (resolve, reject) {
        });
    }

    getAllByCity(cityId: number): Promise<model.UserModel[]> {
        return new Promise(function (resolve, reject) {
        });
    }

    getAllByState(stateId: number): Promise<model.UserModel[]> {
        return new Promise(function (resolve, reject) {
            //    var users = [];
            //    var user: Model.User = { salutation: "Mr.", name: "Raw", age: 10 };
            //    users.push(user);
            //    var user: Model.User = { salutation: "Mrs.", name: "Raw11", age: 39 };
            //    users.push(user);
            //    return users;
        });
    }
};

export {UserRepository as userrepository };