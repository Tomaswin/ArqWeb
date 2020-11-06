// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'V1 Its Working',
        message: 'Welcome to ArqWeb',
    });
});
// Import contact controller
var reservaController = require('./reservaController');
// Contact routes
router.route('/reserva')
    .get(reservaController.index)
    .post(reservaController.new);

router.route('/reserva/:reserva_id')
    .get(reservaController.view)
    .put(reservaController.update)
    .delete(reservaController.delete);

router.route('reserva/:reserva_date')
    .get(reservaController.index);


// Export API routes
module.exports = router;
