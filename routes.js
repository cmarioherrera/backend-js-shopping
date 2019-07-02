/**
 * Main application routes
 */
const helloworld = require('./api/helloworld');

module.exports = (app) => {
  app.use('/api/helloworld', helloworld);
};
