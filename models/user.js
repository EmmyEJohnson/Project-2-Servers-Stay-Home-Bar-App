//MODELS user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    text: String,
    drink: String,
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
   // should come from Google
    email: String,
    // should come from Google
    id: String,
    // should come from Google
    photo: String,
    // should come from Google
    comments: [commentSchema],
    //User selects 
    barChoice: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);



