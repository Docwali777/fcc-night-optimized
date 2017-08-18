const mongoose = require('mongoose');
let { Schema }  = mongoose

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  googleID: String,
  password: String
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema)
