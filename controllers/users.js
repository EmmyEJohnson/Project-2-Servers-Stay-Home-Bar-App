//CONTROLLERS users.js

const User = require("../models/user");

module.exports = {
  index,
  addComment,
  delComment,
};

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
  req.user.comments.text.push(req.body);
  req.user.comments.drinks.push(req.body);
  req.user.save(function (err) {
    res.redirect("/users");
  });
}

//delete function should only remove comments. We will keep the drinks record 

function delComment(req, res) {
    Comments.findById(req.params.id).populate('user').exec(function(err, comment) {
      Comments.findByIdAndDelete(req.params.id, function(err) {
        res.redirect(`/users/${comments.user._id}`);
      });
    });
  }

  
  