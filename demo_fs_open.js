var fs = require('fs');

fs.open('mynewfile2.txt','w', function(err,file){
	if(err)	throw err;
	console.log('saved!');
});

// 'w' is for the writing and if the file is not existed it will be created.