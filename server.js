const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express();
const router = require('./router/auth-route');





// Connection URI
const uri = 'mongodb://localhost:27017/test';

// Connect to MongoDB
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Successfull'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const corsOptions = {
    origin: 'http://localhost:3000',
    method: 'GET, POST, DELETE, PUT, PATCH, HEAD',
    credential:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the backend server!");
});

app.get("/register", (req, res) => {
    res.status(200).send("Welcome to the Register page!!");
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
