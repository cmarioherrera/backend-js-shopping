/**
 * Main application file
*/

const express = require('express');
const http = require('http');
const expressConfig = require('./config/express');
const routeConfig = require('./routes');

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
