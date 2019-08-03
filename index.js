var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express()
var port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var Users = require('./routes/Users');


app.use('/users', Users);



app.listen(port, ()=>{
    console.log("Server is running on port: "+ port);
})