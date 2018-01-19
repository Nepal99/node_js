var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {
		'Content-Type': 'text/html'
		});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('<h1>Hello World!</h1>');
}).listen(8081);