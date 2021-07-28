// CONFIG passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        // passport callback function
        // user logged in with OAuth...
        // console.log('passport callback function fired');
        // console.log(profile);
    User.findOne({ email: profile.email }, function (err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
        } else {
          const newUser = new User ({
            name: profile.displayName, //from Google
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
            id: profile.id,
          });
          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
)




passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});