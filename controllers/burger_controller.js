var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
    models.Burgers.findAll({
        })
        .then(function(burgers) {
            res.render('index', {
                burgers: burgers
            })
        })
});

router.post('/create', function(req, res) {
    models.Burgers.create({
            burger_name: req.body.name
        })
        .then(function() {
            res.redirect('/');
        })
});

router.put('/update/:id', function(req, res) {
    models.Burgers.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.redirect('/');
        })
});

router.delete('/delete/:id', function(req, res) {
    models.Burgers.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/');
        })
});

module.exports = router;
