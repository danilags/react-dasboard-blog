const express = require('express')
const router = express.Router()
const userCont = require('../controllers/user')

router.get('/', userCont.getAll)

router.post('/', userCont.createUser)

router.get('/:id', userCont.userFindOne)

router.delete('/', userCont.deleteUser)

module.exports = router;