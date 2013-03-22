var http = require('http');
var port = process.env.PORT||8000;

http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(req.connection.remoteAddress);

}).listen(port);

console.log('Whatismyip started: http://localhost:'+ port +'/');