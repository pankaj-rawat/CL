"use strict";
const userrepository_1 = require("./userrepository");
const jwt = require('jwt-simple');
const config = require('config');
const db = require("../db");
const logger_1 = require("../logger");
const bcrypt = require('bcryptjs');
class authRepository {
    login(username, password) {
        let auth;
        return new Promise(function (resolve, reject) {
            if (password.trim() == '') {
                //no need to check, just return empty model
                logger_1.Logger.log.info('blank password supplied');
                reject(auth);
            }
            else {
                let validatePromise = validate(username, password);
                validatePromise.then(function (result) {
                    if (result != null) {
                        auth = genToken(result);
                    }
                    resolve(auth);
                });
                validatePromise.catch(function (error) {
                    reject(error);
                });
            }
        });
    }
    validateUser(userId, res) {
        let userRepo = new userrepository_1.userrepository();
        userRepo.getUserRoles(userId)
            .then(function (result) {
            res(result);
        })
            .catch(function (err) {
            logger_1.Logger.log.error(err);
            res(null);
        });
    }
}
exports.authRepository = authRepository;
function validate(username, password) {
    return new Promise(function (resolve, reject) {
        db.get().getConnection(function (err, connection) {
            let pwd;
            let userId;
            let user;
            let userRoles = new Array();
            if (err != null) {
                logger_1.Logger.log.info("Error occur while validating password. Error:" + err.message);
                reject(err);
            }
            else {
                let query = connection.query("CALL sp_user_select_pwd(?)", [username]);
                query.on('error', function (err) {
                    logger_1.Logger.log.info("Error occur while validating password. Error:" + err.message);
                    reject(err);
                });
                query.on('result', function (row) {
                    if (row.password != null) {
                        pwd = row.password;
                        userId = row.id;
                        userRoles.push(row.role);
                    }
                });
                query.on('end', function (result) {
                    if (bcrypt.compareSync(password, pwd)) {
                        user = {
                            roles: userRoles,
                            userName: username,
                            id: userId
                        };
                    }
                    else {
                        reject(new Error("authentication failed."));
                    }
                    resolve(user);
                });
            }
        });
    });
}
// private method
function genToken(user) {
    let expires = expiresIn(Number(config.get("token.daysToExpire")));
    logger_1.Logger.log.info(expires.toString());
    logger_1.Logger.log.info(expires.toUTCString());
    let token = jwt.encode({
        exp: expires
    }, String(config.get("token.key")));
    return {
        expires: expires,
        token: token,
        user: user
    };
}
function expiresIn(numDays) {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
}
//# sourceMappingURL=authRepository.js.map