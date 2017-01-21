var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
