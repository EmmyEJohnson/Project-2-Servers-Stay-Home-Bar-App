//CONTROLLERS index.js


function index(req, res) {
  res.render('index', {
    users,
    name: req.name,
    currentUser: req.user,
  });
}

function addBarChoice(req, res, next) {

  User.findById(req.params.id, function(err, user) {

    if (err) 
      return res.send(err); 
   

    let selection = {
      barChoice:(req.body.id),
    }

    user.barChoice.push(selection);
    console.log(user.selection);

    user.save(function (err) {
      res.redirect("/users");
     });
  })
};



module.exports = {
  index,
  addBarChoice,
};

//just for the VIEWS home page ONLY!