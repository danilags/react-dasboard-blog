const db = require('../models/user')
const jwt = require('jsonwebtoken')
const pwh = require('password-hash')
require('dotenv').config()

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
        usedata: data
      })
    }
  })
}

let loginUser = function(req, res) {
  db.findOne({username: req.body.username}, (err, user) => {
    if (err) {
      res.send({error: err})
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

let userFindOne = function(req, res) {
  db.findOne({_id : req.params.id})
    .exec(function(err, userOne) {
      if (!err) {
        res.send({ success: true, user: userOne})
      } else {
        res.send({ success: false, user: null })
      }
    })
}

let deleteUser = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send({msg : err})
    } else {
      res.send({msg: 'User success deleted'})
    }
  })
}

module.exports = {
  createUser,
  getAll,
  userFindOne,
  deleteUser
}