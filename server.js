//** External Modules
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

//Video Chat



//** Internal Modules
const indexRouter = require('./routes/index');

//** Connect to DB 
require('./config/database');


//** Instanced Module
const app = express();

//** Middleware
app.use(logger('morgan'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'BarHopRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

//** App Configuration
app.set('view engine', 'ejs');

//** Routes
app.use('/', indexRouter);


// app.get("/", (req, res) => {
//   res.render("chat");
// });
 

//** System Variables
const PORT = 5000;


//** Server Bind
app.listen(PORT, function() {
  console.log(`Server live on port http://localhost:${PORT}`);
});


