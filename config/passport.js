// CONFIG passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
  //passport callback function
  //user logged in with OAuth...
  console.log('passport callback function fired');
  console.log(profile);
  new User ({
    username: profile.displayName,
    email: profile.emails[0].value,
    city: profile.city,
    age: profile.age,
    googleId: profile.id,
  }).save()
}
));

