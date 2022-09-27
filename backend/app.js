
// app.js

const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Accessing the path module
const path = require("path");
const app = express();
app.use(cors());



require("./models/Article");

mongoose
 .connect(
     process.env.MONGODB_CONNECTION_STRING,
         {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         }
 )
 .then(() => console.log("MongoDB has been connected"))
 .catch((err) => console.log(err));

 //middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/app")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/app", "index.html"));
});

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

/*
// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
*/