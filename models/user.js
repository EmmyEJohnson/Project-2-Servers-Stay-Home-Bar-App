//MODELS user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema ({
  username: String,
  city: String,
  age: Number,
  googleId: String,

});

module.exports = mongoose.model('user', userSchema);
