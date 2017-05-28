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
      {$push: {"user_article" : data._id}},
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

let getAll = function(req, res) {
  db.find({}, function(err, data) {
    if (!err) {
      res.send(data)
    }
  })
}

let findOneArticle = function(req, res) {
  db.findOne({_id: req.params.id})
    .exec(function(err, oneArticle) {
      if (err) {
        res.send({success: false, msg: err})
      } else {
        res.send({success: true, article: oneArticle})
      }
    })
}

let removeArticle = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send({deleted: false, msg: err})
    } else {
      res.send(`${data.title} success deleted`)
    }
  })
}

module.exports = {
  createArticle,
  getAll,
  removeArticle,
  findOneArticle
}