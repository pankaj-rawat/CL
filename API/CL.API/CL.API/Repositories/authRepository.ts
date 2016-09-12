import irepo = require("../Interfaces/IAuthRepository");
import {userrepository} from  "./userrepository";
import jwt = require('jwt-simple');
import config = require('config');
import * as db from "../db";
import {Logger}  from "../logger";
import * as model  from "../Models/authModel";
import bcrypt = require('bcryptjs');
import {Role} from "../definition";

export class authRepository implements irepo.IAuthRepository {

    login(username: string, password: string): Promise<model.AuthModel> {
        let auth: model.AuthModel;
        return new Promise(function (resolve, reject) {
            if (password.trim() == '') //no need to go to db
            {
                //no need to check, just return empty model
                Logger.log.info('blank password supplied');
                reject(auth);
            }
            else {
                let validatePromise: Promise<model.AuthUsermodel> = validate(username, password);
                validatePromise.then(function (result: model.AuthUsermodel) {
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

    validateUser(userId: number, res: (userRoles: Array<number>) => void): void {
        let userRepo: userrepository = new userrepository();
        userRepo.getUserRoles(userId)
            .then(function (result: Array<number>) {
                res(result);
            })
            .catch(function (err) {
                Logger.log.error(err);
                res(null);
            });
    }
}

function validate(username: string, password: string): Promise<model.AuthUsermodel> {
    return new Promise(function (resolve, reject) {
        db.get().getConnection(function (err, connection) {
            let pwd: string;
            let userId: number;
            let user: model.AuthUsermodel;
            let userRoles: Array<number> = new Array<number>();
            if (err != null) {
                Logger.log.info("Error occur while validating password. Error:" + err.message);
                reject(err);
            }
            else {
                let query = connection.query("CALL sp_user_select_pwd(?)", [username]);
                query.on('error', function (err) {
                    Logger.log.info("Error occur whilevalidating password. Error:" + err.message);
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
function genToken(user: model.AuthUsermodel): model.AuthModel {
    let expires = expiresIn(7); // 7 days
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
    return dateObj.setDate(dateObj.getDate() + numDays);
}