var http = require('http');

// Create a server object
http.createServer(function(req, res) {
	res.write('Hello World!');	//	write response to the client.
	res.end();	// end the response
}).listen(8082);	// the server object listens on port number 8082


