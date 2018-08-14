var express = require('express');
var app = express();

app.use(express.static('src'));

app.listen(3200, function () {
  console.log('Example app listening on port 3200!');
});