/**
 * Hello world Endpoint
 */

const { Router } = require('express');
const controller = require('./helloWorld.controller');

const router = new Router();

// All Verbs
router.get('/', controller.index);

module.exports = router;
