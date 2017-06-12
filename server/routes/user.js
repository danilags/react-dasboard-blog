const express = require('express')
const router = express.Router()
const userCont = require('../controllers/user')

router.get('/', userCont.getAll)

router.post('/', userCont.createUser)

router.post('/login', userCont.loginUser)

router.get('/:id', userCont.userFindOne)

router.delete('/:id', userCont.deleteUser)

module.exports = router;