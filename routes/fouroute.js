const router = require('express').Router();

const Four = require('../models/fourmodel')
const contler = require('../controller/fourcontroller')

router.post('/four', function(req, res) {
    contler.four(req, res);
  });



module.exports = router