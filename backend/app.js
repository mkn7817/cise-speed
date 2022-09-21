// app.js
require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const path = require("path");
const app = express();
var cors = require('cors');
// Connect Database
connectDB();

//cors
app.use(cors({ origin:true, credentials: true }));

//Init Middleware
app.use(express.json({ extended: false}));


if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    })
} else {
    app.get('/', (req,res)=>{
        res.send('Api running');
    })
}

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));