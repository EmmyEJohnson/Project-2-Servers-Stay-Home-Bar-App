//MODELS user.js


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
The barSchema is used to embedded docs in as user doc.
There is no model and no 'bar' collection
*/

const userSchema = new Schema ({
  username: String,
  city: String,
  age: Number,
  googleId: String,

});

module.exports = mongoose.model('user', userSchema);
