// ROUTES index.js

const router = require('express').Router();
const passport = require("passport");
const indexCtrl = require("../controllers/index")

router.get("/index", isLoggedIn, indexCtrl.index);

router.post("/index/:id", isLoggedIn, indexCtrl.addBarChoice);


router.get('/', function(req, res) {
  res.render('index', {
    user: req.user,
  });
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) 
  return next();
  res.redirect("/auth/google");
}

module.exports = router;