﻿import irepo = require("../Interfaces/IAuthRepository");
import jwt = require('jwt-simple');
import config = require('config');

class authRepository implements irepo.IAuthRepository {
     login(req, res) {
        var username = req.body.username || '';
        var password = req.body.password || '';
        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }
        // Fire a query to your DB and check if the credentials are valid
        var dbUserObj = this.validate(username, password);
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }
        if (dbUserObj) {
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            res.json(genToken(dbUserObj));
        }
    }

     validate(username, password) {
        // spoofing the DB response for simplicity
        var dbUserObj = { // spoofing a userobject from the DB. 
            name: 'arvind',
            role: 'admin',
            username: 'arvind@myapp.com'
        };
        return dbUserObj;
    }

     validateUser(username) {
        // spoofing the DB response for simplicity
        var dbUserObj = { // spoofing a userobject from the DB. 
            name: 'arvind',
            role: 'admin',
            username: 'arvind@myapp.com'
        };
        return dbUserObj;
    }   
}


// private method
function genToken(user) {
    var expires = this.expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    },String(config.get("token.key")));
    return {
        token: token,
        expires: expires,
        user: user
    };
}
function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = authRepository;
//export {authRepository as auth};