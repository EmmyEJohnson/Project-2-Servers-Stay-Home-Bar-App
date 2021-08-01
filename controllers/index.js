//CONTROLLERS index.js
const User = require("../models/user");

function index(req, res) {
  res.render('index', {
    users,
    name: req.name,
    currentUser: req.user,
    comments:req.user.comments,
  });
}

function addBarChoice(req, res, next) {

  User.findByIdAndUpdate(req.user._id, req.query, (err, user) => {
    if (err) {
        return res
            .status(500)
            .send({error: "unsuccessful"})
    };
    res.redirect("/Users");
})};

 



module.exports = {
  index,
  addBarChoice,
};

//just for the VIEWS home page ONLY!