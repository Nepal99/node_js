var fs = require('fs');

fs.writeFile('mynewfile3.txt','New Content!!',function(err){
	if(err) throw err;
	console.log('Saved!!!!');
} );