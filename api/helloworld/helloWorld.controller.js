/**
 * Show hello world
 */

function index(req, res) {
  return res.status(200).json({ message: 'hola' });
}

module.exports = { index };
