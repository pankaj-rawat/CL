import irepo = require("../Interfaces/IAuthRepository");
import jwt = require('jwt-simple');
import config = require('config');
import * as db from "../db";
import {Logger}  from "../logger";
import * as model  from "../Models/authModel";

export class authRepository implements irepo.IAuthRepository {

    login(username: string, password: string, res: (auth: model.AuthModel) => void): void {
        var auth: model.AuthModel;

        if (password.trim() == '') //no need to go to db
        {
            //no need to check, just return empty model
            Logger.log.info('blank password supplied');
            res(auth);
        }
        else {
            var authUser = validate(username, password);
            if (authUser!=null) {
                auth = genToken(authUser);
            }
            res(auth);
        }
    }

    validateUser(username: string, res: (auth: model.AuthUsermodel) => void): void {
        var dbUserObj: model.AuthUsermodel = { // spoofing a userobject from the DB. 
            roles: ['admin'],
            userName: 'prawat@myapp.com',
            name: 'Pankaj'
        };
        res(dbUserObj);
    }
}

function validate(username: string, password: string): model.AuthUsermodel {
    var dbUserObj: model.AuthUsermodel = { // spoofing a userobject from the DB. 
        roles: ['admin'],
        userName: 'prawat@myapp.com',
        name: 'Pankaj'
    };
    return dbUserObj;
}
// private method
function genToken(user: model.AuthUsermodel): model.AuthModel {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    }, String(config.get("token.key")));

    return {
        expires: expires,
        token: token,
        user: user
    };
}
function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}