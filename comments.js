// Create web server
// Run server with command: node comments.js
// Open browser and type: http://localhost:3000

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];

var server = http.createServer(function(request, response){
  var urlPath = url.parse(request.url).pathname;

  if (urlPath == '/'){
    urlPath = '/index.html';
  }

  switch (urlPath){
    case '/index.html':
    case '/favicon.ico':
      fs.readFile(path.join(__dirname, urlPath), function(err, data){
        response.end(data);
      });
      break;
    case '/comment':
      var comment = url.parse(request.url, true).query;
      comments.push(comment);
      response.end(JSON.stringify(comments));
      break;
    default:
      response.end('404');
  }
});

server.listen(3000, function(){
  console.log('Server is running at http://localhost:3000');
});
