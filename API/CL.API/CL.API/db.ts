import mysql = require('mysql');
import async = require('async');

var PRODUCTION_DB = 'citylocaldb'
    , DEV_DB = 'citylocaldb';

export var MODE_DEV = 'mode_test'
export var MODE_PRODUCTION = 'mode_production'

var state = {
    pool: null,
    mode: null,
}

export var connect = function (mode, done) {
    state.pool = mysql.createPool({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'mysqlroot',
        database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : DEV_DB
    })

    state.mode = mode
    done()
}

export var get = function () {
    return state.pool
}

//exports.fixtures = function (data) {
//    var pool = state.pool
//    if (!pool) return done(new Error('Missing database connection.'))

//    var names = Object.keys(data.tables)
//    async.each(names, function (name, cb) {
//        async.each(data.tables[name], function (row, cb) {
//            var keys = Object.keys(row)
//                , values = keys.map(function (key) { return "'" + row[key] + "'" })

//            pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
//        }, cb)
//    }, done)
//}

//exports.drop = function (tables, done) {
//    var pool = state.pool
//    if (!pool) return done(new Error('Missing database connection.'))

//    async.each(tables, function (name, cb) {
//        pool.query('DELETE * FROM ' + name, cb)
//    }, done)
//}