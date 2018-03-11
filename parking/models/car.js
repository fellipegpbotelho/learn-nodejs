var mongoose = require('mongoose');

var Car = mongoose.Schema({
    driverName: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['IN', 'OUT'],
        required: true,
        default: 'IN'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Car', Car);