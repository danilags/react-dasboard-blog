const db = require('../models/user')
const jwt = require('jsonwebtoken')
const pwh = require('password-hash')

let createUser = function(req, res) {
  let newUser = new db({
    username      : req.body.username,
    email         : req.body.email,
    password      : pwh.generate(req.body.password),
    user_article  : []
  })

  newUser.save(function(err, data) {
    if (err) {
      res.send({success: false, msg: err})
    } else {
      let newToken = jwt.sign({username: data.username, email: data.email}, process.env.SECRET_KEY)
      res.send({
        success: true,
        msg: 'USer success created',
        token: newToken,
        id: data._id,
      })
    }
  })
}

let getAll = function(req, res) {
  db.find({}, function(err, data) {
    if (!err) {
      res.send(data)
    }
  })
}

module.exports = {
  createUser,
  getAll
}