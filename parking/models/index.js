var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/parking');
var db = mongoose.connection;

db.on('open', function () {
    console.log('A conexão com o MongoDB foi realizada com sucesso...');
});

db.on('error', function () {
    console.log('Ocorreu um erro na conexão com o MongoDB...');
});

return db;