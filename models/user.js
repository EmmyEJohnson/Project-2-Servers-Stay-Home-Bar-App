//MODELS user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      
    },
    drink: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
   // should come from Google
    email: {
      type: String,
      required: true,
    },
    // should come from Google
    id: {
      type: String,
      required: true,
    },
    // should come from Google
    photo: {
      type: String,
      required: true,
    },
    //comments belong to user
    comments: [commentSchema],
    //User selects 
    barChoice: {
      type: String,
      default: "", 
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema);



