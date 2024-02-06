const mongoose = require('mongoose');


// Connection URI
const uri = 'mongodb://localhost:27017/admin';


// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


  module.exports = mongoose;