var http = require('http');

http.createServer(function (req, res) {
	//	If we don't include the response header it will not parse the HTML.
  /**
  res.writeHead(200, {
		'Content-Type': 'text/html'
		});
  */
    res.write('Without Header');
    res.end('<h1>Hello World!</h1>');
}).listen(8080);