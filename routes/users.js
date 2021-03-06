//ROUTES users.js

const router = require("express").Router();
const usersCtrl = require("../controllers/users");

router.get("/users", isLoggedIn, usersCtrl.index);

router.post("/users/:id", isLoggedIn, usersCtrl.addComment);

// DELETE /comments/:id
router.delete("/comments/:id/", isLoggedIn, usersCtrl.delComment);


// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) 
  return next();
  res.redirect("/auth/google");
}

  module.exports = router;