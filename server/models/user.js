const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username      : String,
  email         : String,
  password      : String,
  user_article  : [{type : Schema.Types.ObjectId, ref: 'Article'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
