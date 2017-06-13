var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/indexCtrl')

/* GET home page. */
router.get('/', function(req, res, next) {
    ctrl.get(req, res, next);
});

router.put('/:id', function(req, res, next) {
    ctrl.put(req, res, next);
});

router.post('/', function(req, res, next) {
    ctrl.post(req, res, next);
});

router.delete('/:id', function(req, res, next) {
    ctrl.delete(req, res, next);
});


module.exports = router;
