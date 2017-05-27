const db = require('../models/article')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const pwh = require('password-hash')

let createArticle = function(req, res) {
  db.create({
    title     : req.body.title,
    content   : req.body.content,
    author    : req.body.author,
    updatedAt : new Date,
    createdAt : new Date
  }, function(err, data) {
    if (err) {
      res.send({success: false, data: null})
    } else {
      user.findByIdAndUpdate(data.author,
      {$push: {"article" : data._id}},
      {safe: true, upsert: true, new: true},
        function(err, success) {
          if (err) {
            res.send(err)
          } else {
            res.send(success)
          }
        }
      )
    }
  })
}