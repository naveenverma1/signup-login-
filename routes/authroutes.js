const router = require('express').Router();

const User = require('../models/models')
const controler = require('../controller/controller')

router.post('/register', function(req, res) {
    controler.sav(req, res);
  });

  router.post('/login', function(req, res) {
    controler.logi(req, res);
  });

  router.get('/login', function(req, res) {
    controler.data(req, res);
  });



module.exports = router;