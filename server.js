//** External Modules
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');

//** Internal Modules
const indexRouter = require('./routes/index');

//** Connect to DB 
require('./config/database');
require('dotenv').config();

//** Instanced Module
const app = express();

//** Middleware
app.use(logger('morgan'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//** App Configuration
app.set('view engine', 'ejs');

//** Routes
app.use('/', indexRouter);

//** System Variables
const PORT = 5000;

//** Server Bind
app.listen(PORT, function() {
  console.log(`Server live on port http://localhost:${PORT}`);
});


