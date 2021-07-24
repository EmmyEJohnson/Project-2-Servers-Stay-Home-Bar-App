//CONFIG database.js

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI, {
  useFindAndModify: false,
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });

const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });