"use strict";

var dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

var app = require('./app');

var http = require('http');

var debug = require('debug')('node-angular'); // port normalization


var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

var onError = function onError(error) {
  var addr = server.address();

  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(port);

  switch (error.code) {
    case 'EACCES':
      console.error("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error("".concat(bind, " is already in use"));
      process.exit(1);
      break;

    default:
      throw error;
  }
};

var onListening = function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(port);
  debug("Listening on ".concat(bind));
};

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port, function () {
  console.log('The app is running on port: ' + port);
});
