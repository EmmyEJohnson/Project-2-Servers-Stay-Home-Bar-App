//CONFIG database.js

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,  {
  useFindAndModify: false,
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });

