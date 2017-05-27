var express = require('express');
var router = express.Router();
// var contArticle = require('../controllers/article');

// router.post('/login', contUser.loginUser)
router.get('/', function(req, res) {
  res.send("Thanks udah buat lama")
})

module.exports = router;