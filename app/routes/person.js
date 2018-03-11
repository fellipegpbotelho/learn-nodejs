var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

// find all
router.get('/', function (req, res) {
    Person.find({}, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });
});

// find one
router.get('/:id', function (req, res) {
    Person.findOne({
        _id: req.params.id
    }, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });
});

router.post('/', function (req, res) {
    Person.create({
        name: {
            firstName: 'Alfredo',
            lastName: 'Geraldo'
        },
        age: 3
    }, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });
});

router.put('/:id', function (req, res) {
    Person.update({
        _id: req.params.id
    }, {
        name: {
            firstName: 'Alfredo II',
            lastName: 'Geraldo'
        },
        age: 10
    }, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });

    /*
    or
    Person.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: {
            firstName: 'Ted',
            lastName: 'Talks'
        }
    }, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    })
     */
});

router.delete('/:id', function (req, res) {
    Person.findOneAndRemove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            return;
        }
        res.send(req.params.id);
    });
});

module.exports = router;