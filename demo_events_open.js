var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');

fs.open('demofile.txt','w',function(err,file){
	if(err) throw err;
	console.log("New file created and saved");
});

rs.on('open', function(){
	console.log("File is opened");
});