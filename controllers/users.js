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
  // console.log(req.params.id);

  User.findById(req.params.id, function(err, user) {
    // console.log(user);

    if (err) 
      return res.send(err); 
    // console.log(req.body);

    let comment = {
      text:(req.body.text),
      drink:(req.body.drink),
    }

    user.comments.push(comment);
    // console.log(user.comments);

    user.save(function (err) {
      res.redirect("/users");
     });
  })
};

//delete function should only remove comments. We will keep the drinks record 

function delComment(req, res, next) {
  // console.log(req.user.id);
  console.log(req.url);

  User.findById(req.user._id, function(err, user) {
    console.log(user);

    if (err) {
      console.log(err);
    }
    //   return res.send(err); 
    // console.log(req.body);

    user.comments.id(req.params.id).remove();
    // console.log(user.comments);

    user.save(function (err) {
      console.log(user);
      console.log("I am the user after a save");
      console.log(err)
      res.redirect("/users");
     });
  })
};
  
  module.exports = {
    index,
    addComment,
    delComment,
  };