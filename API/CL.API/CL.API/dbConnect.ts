import mysql = require('mysql');

export interface IDBConnect {
    err: mysql.IError;
    connection: mysql.IConnection;
}

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mysqlroot',
    database: 'address_book',
    debug: false
});

export function Connect(): IDBConnect {
    var idbConnect: IDBConnect;
    pool.getConnection(function (err, connection) {
        if (err) {
            idbConnect.err = err;
        }
        else {
            idbConnect.connection = connection;
        }

    });
    return idbConnect;
};