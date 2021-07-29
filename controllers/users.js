//CONTROLLERS users.js

const User = require("../models/user");


function index(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      404;
      console.log(err);
    }
    res.render("users/index", {
      users,
      name: req.name,
    });
  });
}

function addComment(req, res, next) {
  console.log(req.params.id);
  User.findById(req.params.id,function(err, user){
    console.log(user);
    if (err) return res.send(err); console.log(req.body);
    let comment = {
      text:(req.body.text),
      drink:(req.body.drink),
    }
    user.comments.push(comment);
    console.log(user.comments);
    user.save(function (err) {
      res.redirect("/users");
     });
})};

//delete function should only remove comments. We will keep the drinks record 

function delComment(req, res) {
    user.comments.findById(req.params.id).populate('user').exec(function(err, comment) {
      user.comments.findByIdAndDelete(req.params.id, function(err) {
        res.redirect(`/users/${comments.user._id}`);
      });
    });
  }

  
  module.exports = {
    index,
    addComment,
    delComment,
  };