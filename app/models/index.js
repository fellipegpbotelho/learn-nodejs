var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app');
var db = mongoose.connection;

db.on('open', function () {
    console.log('MongoDB is connected...');
});

db.on('error', function () {
    console.log('Something went wrong during MongoDB connection...');
});

return db;