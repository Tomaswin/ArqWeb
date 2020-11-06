// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var reservaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    date: {
      type: Date,
      default: Date.now
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Reserva = module.exports = mongoose.model('reserva', reservaSchema);
module.exports.get = function (callback, limit) {
    Reserva.find(callback).limit(limit);
}
