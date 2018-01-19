var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


var port = process.env.port||8087;

const server = createServer(function(req, res){

	if(req.url=='/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req, function(err,fields,files){
			var oldPath = files.filetoupload.path;
			var newpath = 'C:\Users\nepal\Desktop\clean\node_js'+file.filetoupload.path;
			fs.rename(oldPath, newpath, function(err){
				if(err){
					throw err;
				}else{
					res.write('file Uploaded and moved!');
					res.end();
				}
			})
			res.write("file Uploaded");
			res.end();
		});
	}else{

	res.writeHead(200, {'Content-Type:'text/html});
	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="fileupload"> <br />');
	res.write('<input type="submit">');
	res.write('</form>');
	return res.end();
	}
});

server.listen(port);