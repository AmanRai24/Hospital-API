const mongoose = require('mongoose');

const connection = "mongodb+srv://souvikmukherjee089:Souvik12345@hospital-api-cluster.5ppzfch.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;