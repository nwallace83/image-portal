var express = require('express');
var app = express();
var path = require('path');

app.use(express.static("dist/public"));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.listen(8080, function () {
  console.log('App listening on port 3000!');
});