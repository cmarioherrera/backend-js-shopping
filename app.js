/**
 * Main application file
*/

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const expressConfig = require('./config/express');
const routeConfig = require('./routes');
const config = require('./config/environment');

//
mongoose.connect(config.mongo.uri, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error('Error', 'Mongodb connection error', {
    data: err,
    time: new Date().toISOString(),
  });
  process.exit(-1);
});

// setup server
const app = express();
const server = http.createServer(app);

expressConfig(app);
routeConfig(app);

const config = {
  port: 3000,
  ip: '127.0.0.1',
};

// Start server
function startServer() {
  app.shoppingCarBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;
