const mongoose = require('mongoose');
const { DB_URI } = require('./env');
// const dbURI = 'mongodb://0.0.0.0:27017/tokopedia_play'; // Replace with your MongoDB URI

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});