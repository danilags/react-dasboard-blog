const express = require('express')
const router = express.Router()
const userCont = require('../controllers/user')

router.get('/', userCont.getAll)

router.post('/', userCont.createUser)

module.exports = router;