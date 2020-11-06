// contactController.js
// Import contact model
Reserva = require('./reservaModel');
// Handle index actions
exports.index = function (req, res) {
    Reserva.get(function (err, reserva) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Reservas retrieved successfully",
            data: reserva
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var reserva = new Reserva();
    reserva.name = req.query.name ? req.query.name : reserva.name;
    reserva.date = req.query.date;
    reserva.email = req.query.email;
    reserva.phone = req.query.phone;
// save the contact and check for errors
    reserva.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New Reserva created!',
                data: reserva
            });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Reserva.findById(req.params.reserva_id, function (err, reserva) {
        if (err)
            res.send(err);
        res.json({
            message: 'Reservas details loading..',
            data: reserva
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Reserva.findById(req.params.reserva_id, function (err, reserva) {
        if (err)
            res.send(err);
        reserva.name = req.body.name ? req.body.name : reserva.name;
        reserva.gender = req.body.gender;
        reserva.email = req.body.email;
        reserva.phone = req.body.phone;
// save the contact and check for errors
        reserva.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Reserva Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Reserva.remove({
        _id: req.params.reserva_id
    }, function (err, reserva) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
