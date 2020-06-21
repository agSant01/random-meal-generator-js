/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @summary Files that containes the default configuration pipeline for the Express app object
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:13:02
 * Last modified  : 2020-06-19 22:13:26
 */

var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

exports.configureExpressApp = (app) => {
    if (process.env.NODE_ENV == 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(morgan('combined'));
    }

    app.use(cors());

    // This is for USE with POSTS
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    console.debug('Finished configuring app...');
    return app;
};

exports.configureErrors = (app) => {
    app.on('error', onError);
    app.on('listening', onListening);

    app.use(logError);
    app.use(errorHandler);
};

function logError(err, req, res, next) {
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next) {
    var status = err.status || 500;
    if (process.env.NODE_ENV == 'production') {
        var message = err.custom_message || 'Internal Server Error';
        res.status(status).json({ error: message, status: status });
    } else {
        res.status(status);
        res.json({ error: err.stack, status: status }).end();
    }
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on ' + bind);
}
