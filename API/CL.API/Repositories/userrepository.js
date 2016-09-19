"use strict";
const db = require("../db");
const logger_1 = require("../logger");
class UserRepository {
    constructor() {
        this.repoName = 'UserRepository';
    }
    find(id) {
        return new Promise(function (resolve, reject) {
            if (id != null) {
                try {
                    db.get().getConnection(function (err, connection) {
                        if (err != null) {
                            logger_1.Logger.log.info('Error occured in ' + this.repoName + ' - find - id:' + id + '  Error:' + err);
                            reject(err);
                        }
                        else {
                            let query = connection.query('SELECT * FROM user WHERE id = ?', id);
                            query.on('error', function (err) {
                                logger_1.Logger.log.info('Error occured in ' + this.repoName + ' - find - id:' + id + '  Error:' + err);
                                reject(err);
                            });
                            //query.on('fields', function (fields) {
                            //    Logger.log.info('Error occured in UserRepository - find - id:' + id + '  Error:' + err);
                            //});
                            query.on('result', function (row, result) {
                                result = {
                                    id: row.Id,
                                    email: row.email,
                                    phoneLandLine: row.phoneLandLine,
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
                            query.on('end', function (result) {
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
    create(user) {
        return new Promise(function (resolve, reject) {
            db.get().getConnection(function (err, connection) {
                if (err != null) {
                    logger_1.Logger.log.info('Error occured in ' + this.repoName + ' - Signup - user:' + user.email + '  Error:' + err);
                    reject(err);
                }
                else {
                    let query = connection.query('CALL sp_user_insert(?,?,?,?,?,?)', [user.email, user.password, user.phoneLandLine, user.phoneCell, user.idCity, user.subscriptionOptIn]);
                    query.on('error', function (err) {
                        logger_1.Logger.log.info('Error occured in ' + this.repoName + ' - Create -' + user.email + '  Error:' + err);
                        reject(err);
                    });
                    query.on('result', function (row) {
                        //to exclude OkPacket
                        if (row.id != null) {
                            user.createdOn = row.createdOn;
                            user.id = row.id;
                            user.idStatus = row.idStatus;
                        }
                    });
                    query.on('end', function (result) {
                        resolve(user);
                        connection.release();
                    });
                }
            });
        });
    }
    update(user) {
        return new Promise(function (resolve, reject) {
            let user;
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
    remove(id) {
        return new Promise(function (resolve, reject) {
        });
    }
    getUserRoles(id) {
        return new Promise(function (resolve, reject) {
            if (id != null) {
                try {
                    db.get().getConnection(function (err, connection) {
                        if (err != null) {
                            logger_1.Logger.log.error(err);
                            reject(err);
                        }
                        else {
                            let roles = new Array();
                            let query = connection.query("Select idrole from userrole where iduser=?", id);
                            query.on('error', function (err) {
                                logger_1.Logger.log.error(err);
                                reject(err);
                            });
                            query.on('result', function (row) {
                                roles.push(row.idrole);
                            });
                            query.on('end', function (result) {
                                resolve(roles);
                            });
                        }
                    });
                }
                catch (err) {
                    logger_1.Logger.log.error(err);
                    reject(err);
                }
            }
            else {
                logger_1.Logger.log.info("No user supplied");
                reject(new Error("No user supplied."));
            }
        });
    }
    getAllByCity(cityId) {
        return new Promise(function (resolve, reject) {
        });
    }
    getAllByState(stateId) {
        return new Promise(function (resolve, reject) {
            //    var users = [];
            //    var user: Model.User = { salutation: "Mr.", name: "Raw", age: 10 };
            //    users.push(user);
            //    var user: Model.User = { salutation: "Mrs.", name: "Raw11", age: 39 };
            //    users.push(user);
            //    return users;
        });
    }
    resetPasswordRequest(username) {
        return new Promise(function (resolve, reject) {
        });
    }
}
exports.userrepository = UserRepository;
;
//# sourceMappingURL=userrepository.js.map