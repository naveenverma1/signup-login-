
const router = require('express').Router();

const Catagories = require('../models/thirdmodel')
const contrler = require('../controller/thirdcontroller')

router.post('/tcatagories', function(req, res) {
    contrler.tcata(req, res);
  });



module.exports = router;