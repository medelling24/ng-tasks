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

module.exports = router;
