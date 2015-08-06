var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var root = __dirname;

app.use(express.static(process.cwd() + '/app/public'));
app.use(express.static(root + '/views'));
app.use('/bower_components', express.static(path.join(root, 'bower_components')));
app.use('/app', express.static(path.join(root, 'app')));

app.get('/', function(req, res){
  res.sendFile(path.join(root + '/index.html'));
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
