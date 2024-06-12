// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.send(comments.get());
});

app.post('/comments', function(req, res) {
  comments.add(req.body);
  res.send(comments.get());
});

app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
