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
      currentUser: req.user,
    });
  });
}

function addComment(req, res, next) {
  console.log(req.params.id);

  User.findById(req.params.id, function(err, user) {
    console.log(user);

    if (err) 
      return res.send(err); 
    console.log(req.body);

    let comment = {
      text:(req.body.text),
      drink:(req.body.drink),
    }

    user.comments.push(comment);
    console.log(user.comments);

    user.save(function (err) {
      res.redirect("/users");
     });
  })
};

//delete function should only remove comments. We will keep the drinks record 

function delComment(req, res, next) {
  console.log(req.params.id);

  User.findOneAndRemove(req.params.id, function(err, user) {
    console.log(user);

    if (err) 
      return res.send(err); 
    console.log(req.body);

    let comment = {
      text:(req.body.text),
    }

    user.comments.remove(comment);
    console.log(user.comments);

    user.save(function (err) {
      res.redirect("/users");
     });
  })
};
  
  module.exports = {
    index,
    addComment,
    delComment,
  };