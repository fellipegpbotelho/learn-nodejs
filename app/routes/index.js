var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var companies = [];
    for (var i=0; i<10; i++) {
        companies.push({
            id: i,
            name: 'Company ' + i
        });
    }
    res.render('index', {
        title: 'Express & Mongoose & Handlebars',
        name: 'Fellipe Geraldo Pereira Botelho',
        companies: companies
    });
});

module.exports = router;
