var express = require('express');
var router = express.Router();
var contArticle = require('../controllers/article');

// router.post('/login', contUser.loginUser)
router.get('/', contArticle.getAll)

router.post('/', contArticle.createArticle)

router.get('/:id', contArticle.findOneArticle)

router.delete('/:id', contArticle.removeArticle)

module.exports = router;