"use strict";
const mysql = require('mysql');
const config = require('config');
var state = {
    pool: null,
    mode: null,
};
exports.connect = function (mode, done) {
    state.pool = mysql.createPool({
        host: config.get('dbConfig.host'),
        port: config.get('dbConfig.port'),
        user: config.get('dbConfig.user'),
        password: config.get('dbConfig.password'),
        database: config.get('dbConfig.database')
    });
    state.mode = mode;
    done();
};
exports.get = function () {
    return state.pool;
};
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
//# sourceMappingURL=db.js.map