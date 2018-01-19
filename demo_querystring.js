var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/html' 
	});
	res.write("<h1>Query String Split</h1> <br />");
	var q = url.parse(req.url, true).query;
	var txt = q.year+" " +q.month;
	res.end(txt);

}).listen(8084);

// pass this url to see the output.http://localhost:8084/?year=2017&month=July 