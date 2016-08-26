import irepo = require("../Interfaces/IAuthRepository");
import jwt = require('jwt-simple');
import config = require('config');
import * as db from "../db";
import {Logger}  from "../logger";
import * as model  from "../Models/authModel";
import bcrypt = require('bcryptjs');

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
                validatePromise.then(function (result:model.AuthUsermodel) {
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

    validateUser(username: string, res: (auth: model.AuthUsermodel) => void): void {
        let dbUserObj: model.AuthUsermodel = { // spoofing a userobject from the DB. 
            roles: ['admin'],
            userName: 'prawat@myapp.com'
        };
        res(dbUserObj);
    }
}

function validate(username: string, password: string): Promise<model.AuthUsermodel> {
    return new Promise(function (resolve, reject) {
        db.get().getConnection(function (err, connection) {
            let pwd: string;
            let user: model.AuthUsermodel;
            let userRoles: Array<string> = new Array<string>();
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
                        userRoles.push(row.value);  
                    }
                });
                query.on('end', function (result) {
                    if (bcrypt.compareSync(password, pwd)) {
                        user = { // spoofing a userobject from the DB. 
                            roles: userRoles,
                            userName: username
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