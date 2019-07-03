/**
 * Main application routes
 */
const helloworld = require('./api/helloworld');
const product = require('./api/product');

module.exports = (app) => {
  app.use('/api/helloworld', helloworld);
  app.use('/api/product', product);
};
