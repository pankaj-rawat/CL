"use strict";
const winston = require('winston');
const fs = require('fs');
var Logger;
(function (Logger) {
    const env = process.env.NODE_ENV || 'development';
    const logDir = 'log';
    // Create the log directory if it does not exist
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
    const tsFormat = () => (new Date()).toLocaleTimeString();
    Logger.log = new (winston.Logger)({
        transports: [
            // colorize the output to the console
            new (winston.transports.Console)({
                timestamp: tsFormat,
                colorize: true,
                level: 'info',
                handleExceptions: true
            }),
            new (require('winston-daily-rotate-file'))({
                filename: `${logDir}/-results.log`,
                timestamp: tsFormat,
                datePattern: 'yyyy-MM-dd',
                prepend: true,
                level: env === 'development' ? 'verbose' : 'info',
                handleExceptions: true
            })
        ],
        exceptionHandlers: [
            new (require('winston-daily-rotate-file'))({
                filename: `${logDir}/-exception.log`,
                timestamp: tsFormat,
                datePattern: 'yyyy-MM-dd',
                prepend: true,
                level: env === 'development' ? 'verbose' : 'info',
                handleExceptions: true,
                humanReadableUnhandledException: true
            })
        ]
    });
})(Logger = exports.Logger || (exports.Logger = {}));
//# sourceMappingURL=logger.js.map