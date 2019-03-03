const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const key = require('./config/key')
require('./models/User')
const passportConfig = require('./services/passport');

mongoose.connect(key.mongoURI);

const app = express();

authRoutes(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT)

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});
*/