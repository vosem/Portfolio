var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
  var urlParsed = url.parse(req.url);
    sendFile("ToDo.html", res);
	//sendFile("todo.css", res);
}).listen(3000);


function sendFile(fileName, res) {
  var fileStream = fs.createReadStream(fileName);
  fileStream
    .on('error', function() {
      res.statusCode = 500;
      res.end("Server error");
    })
    .pipe(res)
    .on('close', function() {
      fileStream.destroy();
    });
}