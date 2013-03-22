var http = require('http');
sys = require( 'sys' );
var port = process.env.PORT||8000;

http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(req.headers['x-forwarded-for']||req.connection.remoteAddress);

}).listen(port);

console.log('Whatismyip started: http://localhost:'+ port +'/');