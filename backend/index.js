var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var bodyParser = require('body-parser')

dotenv.config();
var app = express();

// database connection
var database = require('./config/database');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Api Rotutes
app.get('/api', (req, res) => res.send('Backend Api Routes is working properly'));
app.post('/api/add', (req, res) => {
    const { num1, num2 } = req.body;
    let carry = 0;
    let carryString = "";
    let sumS = (+num1) +(+num2);
  
    for (let i = num1.length - 1, j = num2.length - 1; i >= 1 || j >= 1; i--, j--) {
        let a = i >= 1 ? parseInt(num1[i]) : 0;
        let b = j >= 1 ? parseInt(num2[j]) : 0;
        carry = Math.floor((a + b + carry) / 10);
        carryString = (i > 0 || j > 0) ? carry  + carryString : carry + carryString;
    }
    
    res.send({
      sumIs: sumS,
      carryIs: carryString
  });
});

module.exports = app;