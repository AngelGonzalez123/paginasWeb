var express = require('express');
var app = express();
var path    = require("path");

app.get('/', function (req, res) {
	console.log('index page');
    res.sendFile(path.join(__dirname+'/index.html'));
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})